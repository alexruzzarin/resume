import H3 from "./styled/H3";
import { Skill } from "../types";
import { AsideList, AsideListItem } from "./styled/AsideList";
import AsideSection from "./styled/AsideSection";

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      {skills &&
        skills.map((skill, index) => {
          return (
            <AsideSection key={index}>
              <H3>{skill.name}</H3>
              <AsideList>
                {skill.keywords &&
                  skill.keywords.map((keyword) => {
                    return (
                      <AsideListItem key={keyword} margin={1}>
                        <h6 className="font-light">{keyword}</h6>
                      </AsideListItem>
                    );
                  })}
              </AsideList>
            </AsideSection>
          );
        })}
    </>
  );
};

export default Skills;
