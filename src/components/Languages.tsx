import H3 from "./styled/H3";
import { Language } from "../types";
import { AsideList, AsideListItem } from "./styled/AsideList";
import AsideSection from "./styled/AsideSection";

interface LanguagesProps {
  languages: Language[];
}

const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <AsideSection>
      <H3>Languages</H3>
      <AsideList>
        {languages &&
          languages.map((language, index) => {
            return (
              <AsideListItem key={index}>
                <h6>{language.language}</h6>
                <span className="italic font-light text-sm">{language.fluency}</span>
              </AsideListItem>
            );
          })}
      </AsideList>
    </AsideSection>
  );
};

export default Languages;
