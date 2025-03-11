// import "H3.module.css";
const H3: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <h3 className="text-xl print:text-lg font-normal leading-6 print:leading-5 align-text-bottom uppercase my-4 print:my-2">
      {children}
    </h3>
  );
};

export default H3;
