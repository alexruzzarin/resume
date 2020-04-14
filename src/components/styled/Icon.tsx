import Location from "../../icons/map-marker-alt-solid.svg";
import Email from "../../icons/envelope-solid.svg";
import Websites from "../../icons/globe-solid.svg";
import PhoneNumber from "../../icons/phone-alt-solid.svg";
import GitHub from "../../icons/github-brands.svg";
import Twitter from "../../icons/twitter-brands.svg";
import Facebook from "../../icons/facebook-f-brands.svg";
import Instagram from "../../icons/instagram-brands.svg";
import Summary from "../../icons/user-solid.svg";
import WorkExperience from "../../icons/laptop-solid.svg";
import Volunteer from "../../icons/hands-helping-solid.svg";
import Education from "../../icons/graduation-cap-solid.svg";

const types = {
  Location,
  Email,
  Websites,
  "Phone Number": PhoneNumber,
  GitHub,
  Twitter,
  Facebook,
  Instagram,
  Summary,
  "Work Experience": WorkExperience,
  Volunteer,
  Education,
};

type Types = Extract<keyof typeof types, string>;

interface IconProps {
  type: Types;
}

const Icon: React.FC<IconProps> = ({ type, ...rest }) => {
  const IconType = types[type];
  return <IconType alt={type} className="inline h-6 w-6 mr-2" {...rest} />;
};

export default Icon;
