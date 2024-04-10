import { PortableTextBlock, PortableTextComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";

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
        <h1 className="font-libre-baskerville">{ children }</h1>
      ),
      h2: ({ children }) => (
        <h2 className="font-libre-baskerville">{ children }</h2>
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