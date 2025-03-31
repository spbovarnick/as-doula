import React from "react"
import Link from "next/link";
import styles from "../styles/CtaButton.module.css"

interface CtaHref {
  link: string,
  text: string,
}

const CtaButton: React.FC<CtaHref> = ({ link, text }) => {

  return (
    <Link
      href={link}
      className={`${styles.ctaButton} p-4 border bg-[#f56d1050] rounded-tr-lg rounded-br-3xl rounded-bl-lg rounded-tl-3xl max-w-fit mx-2 hover:bg-[#f56d10] transition-colors duration-200`}
    >
      {text}
    </Link>
  )
}

export default CtaButton;