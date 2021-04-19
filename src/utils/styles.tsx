import tw, { css } from 'twin.macro'

export const Container = tw`
px-4 py-4 mx-auto max-w-2xl lg:(max-w-screen-xl px-16)
`

export const CardStyle = tw`border transition shadow-md hover:(shadow-lg bg-gray-50) bg-gray-100 overflow-hidden rounded`

export const SyntaxCss = css`
  pre {
    ${tw`overflow-x-auto text-sm mb-7 p-3`}
  }

  .remark-code-title {
    ${tw`mt-7 px-3 py-3 border border-b-0 border-gray-500 rounded-t text-sm font-bold text-gray-200 background-color[#282c34]`}
  }

  .remark-code-title + pre {
    ${tw`mt-0 rounded-t-none`}
  }

  .prose img {
    /* Don't apply styles to next/image */
    margin: 0;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    ${tw`text-gray-700`}
  }

  .token.punctuation {
    ${tw`text-gray-200`};
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.deleted {
    ${tw`text-green-400`};
  }

  .token.method.property-access {
    ${`color: #79b6ec`};
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    ${tw`text-indigo-500`};
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style,
  .token.string {
    ${tw`text-yellow-500`};
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    ${tw`text-blue-400`};
  }

  .token.function,
  .token.class-name {
    ${`color: #fac860`};
  }

  .token.regex,
  .token.important,
  .token.variable {
    ${tw`text-yellow-500`};
  }

  code[class*='language-'],
  pre[class*='language-'] {
    ${tw`border text-white border-gray-500 rounded-md background-color[#282c34]`};
  }

  pre[class*='language-'] code[class*='language-'] {
    ${tw`border-transparent px-0 font-normal background-color[#282c34]`};
  }

  pre[class*='language-'] code[class*='language-']::before,
  pre[class*='language-'] code[class*='language-']::after {
    content: '';
  }

  pre::-webkit-scrollbar {
    display: none;
  }

  pre {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
  }
`
