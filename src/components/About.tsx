import H3 from "./styled/H3";
import { Basics } from "../types";
import Icon from "./styled/Icon";
import { AsideList, AsideListItem } from "./styled/AsideList";
import AsideSection from "./styled/AsideSection";

interface AboutProps {
  basics: Basics;
}

const About: React.FC<AboutProps> = ({ basics }) => {
  const { location, profiles } = basics;

  return (
    <AsideSection style={{ pageBreakAfter: "always" }}>
      <H3>About</H3>
      <AsideList>
        <AsideListItem>
          <Icon type="Location" />
          <address className="inline leading-6">
            {location.city}, {location.region}, {location.countryCode}
          </address>
        </AsideListItem>
        <AsideListItem>
          <a href={`mailto:${basics.email}`} target="_blank">
            <Icon type="Email" />
            <span>{basics.email}</span>
          </a>
        </AsideListItem>
        <AsideListItem>
          <a href={basics.website} target="_blank">
            <Icon type="Websites" />
            <span>{basics.website}</span>
          </a>
        </AsideListItem>
        <AsideListItem>
          <a href={`tel:${basics.phone}`} target="_blank">
            <Icon type="Phone Number" />
            <span>{basics.phone}</span>
          </a>
        </AsideListItem>
        {profiles &&
          profiles.map((profile, index) => {
            return (
              <AsideListItem key={index}>
                <a href={profile.url} target="_blank">
                  <Icon type={profile.network} />
                  <span>{profile.username}</span>
                </a>
              </AsideListItem>
            );
          })}
      </AsideList>
    </AsideSection>
  );
};

export default About;
