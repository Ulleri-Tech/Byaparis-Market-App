import { useEffect, useState } from "react";
import TextInput from "../common/TextInput";

export default function ListProduct() {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [product, setProduct] = useState({
    name: "",
    code: "",
    category: "",
    price: 0,
    stock: 0,
    description: "",
  });
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(event.target.files);
  };
  useEffect(() => {
    console.log(product);
  }, [product]);

  const renderSelectedFiles = () => {
    if (!selectedFiles) return null;

    const selectedFileArray = Array.from(selectedFiles);

    return (
      <ul className="mt-1 text-sm text-gray-500 dark:text-gray-300">
        {selectedFileArray.map((file, index) => (
          <li key={index}>{file.name}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="my-10 text-left px-10 max-w-md mx-auto">
      <h2>Create a Product</h2>

      <TextInput
        label="Product Name"
        value={product.name}
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <TextInput
        label="Product Code"
        value={product.code}
        onChange={(e) => setProduct({ ...product, code: e.target.value })}
      />
      <div className="flex gap-2">
        <TextInput
          label="Price in $"
          inputMode="numeric"
          value={"" + product.price}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
            setProduct({ ...product, price: +onlyNumbers });
          }}
        />
        <TextInput
          label="Quantity in Stock"
          inputMode="numeric"
          value={"" + product.stock}
          onChange={(e) => {
            const onlyNumbers = e.target.value.replace(/[^0-9]/g, "");
            setProduct({ ...product, stock: +onlyNumbers });
          }}
        />
      </div>

      <TextInput
        label="Category"
        onChange={(e) => console.log(e.target.value)}
      />
      <div className="flex flex-col my-4 ">
        <label
          htmlFor="description"
          className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="description"
          rows={2}
          className="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
        ></textarea>
      </div>
      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
        />

        <div className="mt-1">
          {selectedFiles ? (
            renderSelectedFiles()
          ) : (
            <div className="text-sm text-gray-500 dark:text-gray-300">
              Choose Multiple Product Images
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
