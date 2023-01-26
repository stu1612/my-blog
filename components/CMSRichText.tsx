import { RichText } from "@graphcms/rich-text-react-renderer";

type Props = {
  data: {
    post: {
      content: {
        raw: {
          children: [];
        };
      };
    };
  };
};

export default function CMSRichText({ data }: Props) {
  const content = data?.post.content.raw;

  return (
    <RichText
      content={content}
      renderers={{
        h1: ({ children }) => (
          <h1
            className={`mb-8 leading-loose text lg:text-4xl xl:text-5xl font-bold`}
          >
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className={`mb-4 text lg:text-3xl xl:text-4xl  `}>{children}</h2>
        ),
        h3: ({ children }) => (
          <h3 className={`text lg:text-3xl xl:text-4xl`}>{children}</h3>
        ),
        p: ({ children }) => <p className={`my-4 text`}>{children}</p>,
        ul: ({ children }) => (
          <ul className={`list-disc list-inside my-4 text `}>{children}</ul>
        ),
        li: ({ children }) => <li className={`my-2 text `}>{children}</li>,
        code: ({ children }) => (
          <code
            className={`bg-gray-100 dark:bg-gray-800 rounded-md flex flex-wrap text-sm `}
          >
            {children}
          </code>
        ),
        code_block: ({ children }) => (
          <pre
            className={`rounded-md text-sm bg-yellow dark:bg-[#454545] text-black dark:text-white flex justify-center `}
          >
            <div className="p-5 overflow-auto">{children}</div>
          </pre>
        ),
      }}
    />
  );
}
