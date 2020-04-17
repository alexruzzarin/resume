const AsideSection: React.FC<React.HTMLAttributes<{}>> = ({ children, ...rest }) => {
  return (
    <section className="mb-8 print:mb-4" {...rest}>
      {children}
    </section>
  );
};
export default AsideSection;
