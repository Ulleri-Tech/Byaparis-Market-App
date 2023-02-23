// opt-out of image optimization, no-op
import Image from "next/image";

const customLoader = ({ src, width }: any) => {
  return `${src}?w=${width || 100}`; // default width is 100px
}
  
  export default function ImageTag(props: any) {
    return <Image {...props} alt={props.alt || ""} loader={customLoader} />
  }