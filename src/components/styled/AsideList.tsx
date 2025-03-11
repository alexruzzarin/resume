export const AsideList: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <ul>{children}</ul>;
};

interface AsideListItemProps {
  margin?: number;
}

export const AsideListItem: React.FC<React.PropsWithChildren<AsideListItemProps>> = ({
  margin = 2,
  children,
}) => {
  return <li className={`my-${margin} print:my-${margin-1}`}>{children}</li>;
};
