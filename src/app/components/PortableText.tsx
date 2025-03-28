import { PortableTextBlock, PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import { libre_baskerville } from '@/app/fonts'

export default function CustomPortableText({
  className,
  value ,
} : {
  className?: string;
  value: PortableTextBlock[],
}) {
  const components: PortableTextComponents = {
    block: {
      h1: ({ children }) => (
        <h1 className={libre_baskerville.className}>{ children }</h1>
      ),
      h2: ({ children }) => (
        <h2 className={libre_baskerville.className}>{ children }</h2>
      ),
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a href={value?.href} rel="noreferrer noopener">
            { children }
          </a>
        )
      },
    },
  }
}