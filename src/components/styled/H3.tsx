// import "H3.module.css";
const H3: React.FC = ({ children }) => {
  return (
    <h3 className="text-xl font-normal leading-6 align-text-bottom uppercase my-4">
      {children}
    </h3>
  );
};

export default H3;
