import {
  PortableText,
  type PortableTextComponents,
  type PortableTextBlock,
} from 'next-sanity';

export default function CustomPortableText({
  className,
  value,
}: {
  className?: string;
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    // Handling various heading levels
    block: {
      default: ({ children }) => <p>{children}</p>,
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold mb-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-bold mb-3">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-bold mb-3">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg font-bold mb-2">{children}</h4>
      ),
      h5: ({ children }) => (
        <h5 className="mb-2 text-sm font-semibold">{children}</h5>
      ),
      h6: ({ children }) => (
        <h6 className="mb-1 text-xs font-semibold">{children}</h6>
      ),
      normal: ({ children }) => <p className="mb-2">{children}</p>,
      // Add serializers for other custom block types here
    },
    // Handling marks (inline text formatting)
    marks: {
      link: ({ children, value }) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-600 hover:underline"
        >
          {children}
        </a>
      ),
      strong: ({ children }) => <strong>{children}</strong>,
      em: ({ children }) => <em>{children}</em>,
    },

    // Handling lists (ordered and unordered)
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc ml-5 my-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal ml-5 my-2">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-1">{children}</li>,
      number: ({ children }) => <li className="mb-1">{children}</li>,
    },
  };

  return (
    <div className={['prose', className].filter(Boolean).join(' ')}>
      <PortableText components={components} value={value} />
    </div>
  );
}
