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
      className={`${styles.ctaButton} bg-dogwood/40 py-4 px-5 rounded-full max-w-fit mx-2 hover:bg-dogwood/100 active:bg-dogwood/100 transition-colors duration-200`}
    >
      {text}
    </Link>
  )
}

export default CtaButton;