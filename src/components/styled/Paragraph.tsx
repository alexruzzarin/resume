const Paragraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <p className="my-2 print:my-1">{children}</p>;
};

export default Paragraph;
