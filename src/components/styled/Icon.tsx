const types = {
  Location: "/icons/map-marker-alt-solid.svg",
  Email: "/icons/envelope-solid.svg",
  Websites: "/icons/globe-solid.svg",
  "Phone Number": "/icons/phone-alt-solid.svg",
  GitHub: "/icons/github-brands.svg",
  Twitter: "/icons/twitter-brands.svg",
  Facebook: "/icons/facebook-f-brands.svg",
  Instagram: "/icons/instagram-brands.svg",
  Summary: "/icons/user-solid.svg",
  "Work Experience": "/icons/laptop-solid.svg",
  Volunteer: "/icons/hands-helping-solid.svg",
  Education: "/icons/graduation-cap-solid.svg",
};

type Types = Extract<keyof typeof types, string>;

interface IconProps {
  type: Types;
}

const Icon: React.FC<IconProps> = ({ type, ...rest }) => {
  return <img alt={type} src={types[type]} className="inline h-6 w-6 mr-2" {...rest} />;
};

export default Icon;
