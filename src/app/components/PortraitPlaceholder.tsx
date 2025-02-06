import "../../../public/portrait1.png"
import Image from "next/image"

export default function PortraitPlaceholder(){
  return (
    <Image
      src={"/../../../public/portrait1.png"}
      height={1024}
      width={1024}
      alt="placeholder"
    />
  )
}