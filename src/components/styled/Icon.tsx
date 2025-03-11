import Image from 'next/image';

type Types = "Location" | "Email" | "Websites" | "Phone Number" | "GitHub" | "LinkedIn" | "Twitter" | "Facebook" | "Instagram" | "Summary" | "Work Experience" | "Volunteer" | "Education" | "About Me"

const mapIconType = new Map<Types, string>([
  ["Location", "icons/map-marker-alt-solid.svg"],
  ["Email", "icons/envelope-solid.svg"],
  ["Websites", "icons/globe-solid.svg"],
  ["Phone Number", "icons/phone-alt-solid.svg"],
  ["GitHub", "icons/github-brands.svg"],
  ["LinkedIn", "icons/linkedin-in-brands.svg"],
  ["Twitter", "icons/twitter-brands.svg"],
  ["Facebook", "icons/facebook-f-brands.svg"],
  ["Instagram", "icons/instagram-brands.svg"],
  ["Summary", "icons/user-solid.svg"],
  ["Work Experience", "icons/laptop-solid.svg"],
  ["Volunteer", "icons/hands-helping-solid.svg"],
  ["Education", "icons/graduation-cap-solid.svg"],
  ["About Me", "icons/timeline.svg"],
])

interface IconProps {
  type: Types;
}

const Icon: React.FC<IconProps> = ({ type }) => {
  const src= mapIconType.get(type);
  if (src){
    return (
      <Image src={src} alt={type} width={50} height={50} className="inline h-6 w-6 mr-2 print:h-4 print:w-4" />
    );
  }
};

export default Icon;
