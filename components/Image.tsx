// opt-out of image optimization, no-op
import Image from "next/image";

const customLoader = ({ src} : any) => {
    return src;
  }
  
  export default function ImageTag(props: any) {
    return <Image {...props} loader={customLoader} />
  }