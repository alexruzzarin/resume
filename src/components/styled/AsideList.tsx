export const AsideList: React.FC = ({ children }) => {
  return <ul>{children}</ul>;
};

interface AsideListItemProps {
  margin?: number;
}

export const AsideListItem: React.FC<AsideListItemProps> = ({
  margin = 2,
  children,
}) => {
  return <li className={`my-${margin} print:my-${margin-1}`}>{children}</li>;
};
