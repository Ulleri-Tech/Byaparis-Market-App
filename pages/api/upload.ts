import fs from "fs";
import formidable, { File as FormidableFile } from "formidable";
import { NextApiRequest, NextApiResponse } from "next";
import { v2 as cloudinary } from "cloudinary";

// Important for NextJS!
export const config = {
  api: {
    bodyParser: false,
  },
};
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    data: string[];
  }>
) {
  try {
    const URLS: string[] = [];
    // Parse request with formidable
    const { fields, files } = await parseFormAsync(req);

    const uploadPromise = new Promise<void>(async (resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "IMAGES" },
        async (error, result) => {
          if (error) return reject(error);
          if (result?.secure_url) {
            URLS.push(result.secure_url);
          }
          resolve();
        }
      );

      for (const fileKey in files) {
        const myfile = files[fileKey] as any as FormidableFile;
        // Read file content
        const fileContent = await fs.promises.readFile(myfile.filepath);

        const fileName = `${myfile.newFilename}.${
          myfile.mimetype?.split("/")[1]
        }`;

        // Pipe the file content buffer to the Cloudinary upload stream
        stream.on("finish", () => console.log("Upload complete", fileName));
        stream.write(fileContent);

        // Save file in the public folder
        // saveFile(fileContent, fileName, "./public/uploads");
      }

      stream.end();
    });

    // Wait for the upload to complete before responding
    await uploadPromise;
    // Return success
    res.status(200).json({ data: URLS });
  } catch (e) {
    return res.status(500).json({ data: [] });
  }
}

function saveFile(
  fileContent: Buffer,
  fileName: string,
  publicFolder: string
): void {
  fs.writeFileSync(`${publicFolder}/${fileName}`, fileContent);
}

export type FormidableParseReturn = {
  fields: formidable.Fields;
  files: formidable.Files;
};

async function parseFormAsync(
  req: NextApiRequest,
  formidableOptions?: formidable.Options
): Promise<FormidableParseReturn> {
  const form = formidable(formidableOptions);

  return await new Promise<FormidableParseReturn>((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) {
        reject(err);
      }

      resolve({ fields, files });
    });
  });
}
