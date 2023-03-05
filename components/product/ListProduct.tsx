import { ProductRequest } from "@/helpers/types";
import { createProduct, uploadImages } from "@/utils/actions";
import { useState } from "react";
import Button from "../common/Button";
import TextInput from "../common/TextInput";
import ImageTag from "../ImageTag";

export default function ListProduct() {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [product, setProduct] = useState<ProductRequest>({
    name: "",
    code: "",
    category: "",
    price: 0,
    inStock: 0,
    description: "",
    images: [],
  });

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;

    // Check if the total number of files is less than or equal to 5
    if (selectedFiles && selectedFiles.length > 5) {
      alert("You can only upload up to 5 files.");
      return;
    }
    setSelectedFiles(event.target.files);
  };

  const renderSelectedFiles = () => {
    if (!selectedFiles) return null;

    const selectedFileArray = Array.from(selectedFiles);

    return (
      <ul className="mt-1 text-sm text-gray-500 flex gap-2">
        {selectedFileArray.map((file, index) => (
          <li key={index}>
            <ImageTag
              className="w-10 border border-gray-400"
              src={URL.createObjectURL(file)}
              alt={file.name}
              width={40}
              height={40}
            />
          </li>
        ))}
      </ul>
    );
  };

  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // code to create product
    const formData = new FormData();

    if (!selectedFiles) return;

    // Assume selectedFiles is a FileList containing multiple files
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append(`files-${i}`, selectedFiles[i]);
    }
    const urls = await uploadImages(formData);
    setProduct({ ...product, images: urls.data });

    const result = await createProduct(product);
    if (result._id) {
      setProduct({
        name: "",
        code: "",
        category: "",
        price: 0,
        inStock: 0,
        description: "",
        images: [],
      });
    }
  };
  return (
    <form
      onSubmit={handleCreate}
      className="my-10 text-left px-10 max-w-md mx-auto"
    >
      <TextInput
        label="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
        required
      />
      <TextInput
        label="Product Code"
        value={product.code}
        required
        onChange={(e) => setProduct({ ...product, code: e.target.value })}
      />
      <div className="flex gap-2">
        <TextInput
          label="Price in $"
          inputMode="numeric"
          required
          value={"" + product.price}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
            setProduct({ ...product, price: +onlyNumbers });
          }}
        />
        <TextInput
          label="Quantity in Stock"
          inputMode="numeric"
          required
          value={"" + product.inStock}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
            setProduct({ ...product, inStock: +onlyNumbers });
          }}
        />
      </div>

      <TextInput
        label="Category"
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      />
      <div className="flex flex-col my-4 ">
        <label
          htmlFor="description"
          className="block mb-2 text-sm  font-medium text-gray-900 "
        >
          Description
        </label>
        <textarea
          id="description"
          rows={2}
          required
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900e"
          htmlFor="images"
        >
          Images
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300  cursor-pointer bg-gray-50  focus:outline-none"
          aria-describedby="images_help"
          id="images"
          multiple
          type="file"
          onChange={handleFileSelect}
          accept="image/jpeg, image/png"
        />

        <div className="mt-1">
          {selectedFiles ? (
            renderSelectedFiles()
          ) : (
            <div className="text-sm text-gray-500 ">
              Choose good product images
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <Button type="submit" theme="yellow">
            Create Product
          </Button>
        </div>
      </div>
    </form>
  );
}
