// opt-out of image optimization, no-op
import Image from "next/image";
import { useState } from "react";

const customLoader = ({ src, width }: any) => {
  return `${src}?w=${width || 100}`; // default width is 100px
};

export default function ImageTag(props: any) {
  const [imgSrc, setImgSrc] = useState(props.src);
  const handleImgError = () => {
    setImgSrc("../images/default-product.png");
  };
  return (
    <Image
      {...props}
      src={imgSrc}
      alt={props.alt || ""}
      onError={handleImgError}
      loader={customLoader}
    />
  );
}
