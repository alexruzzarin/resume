import resume from "../resume";
import { NextPage } from "next";
import H3 from "../components/styled/H3";
import Summary from "../components/styled/Summary";
import About from "../components/About";
import Icon from "../components/styled/Icon";
import Skills from "../components/Skills";
import Languages from "../components/Languages";
import H4 from "../components/styled/H4";
import TimeRange from "../components/TimeRange";

const Index: NextPage = () => {
  const {
    basics,
    skills,
    languages,
    work: works,
    volunteer: volunteers,
    education,
  } = resume;
  const { summary } = basics;
  return (
    <div className="container mx-auto my-16 text-gray-800 bg-gray-100 border-teal-600 border-t-8 shadow-2xl">
      <header className="p-8 bg-teal-900 text-teal-100">
        <h1 className="text-5xl font-bold uppercase">{basics.name}</h1>
        <h2 className="text-2xl uppercase">{basics.label}</h2>
      </header>
      <main className="flex flex-wrap">
        <aside className="bg-teal-400 text-teal-900 p-8 w-full sm:w-2/5 lg:w-1/3 xl:w-1/5">
          <About basics={basics} />
          <Skills skills={skills} />
          <Languages languages={languages} />
        </aside>
        <div className="p-8 w-full sm:w-3/5 lg:w-2/3 xl:w-4/5 font-light">
          <section className="mb-8">
            <H3>
              <Icon type="Summary" />
              Summary
            </H3>
            <Summary summary={summary} />
          </section>
          <section className="mb-8">
            <H3>
              <Icon type="Work Experience" />
              Work Experience
            </H3>
            {works &&
              works.map((work, index) => (
                <div key={index} className="mb-6">
                  <header>
                    <div className="float-right text-right">
                      <h5 className="font-bold">{work.position}</h5>
                      <TimeRange start={work.startDate} end={work.endDate} />
                    </div>

                    <H4>
                      <a href={work.website} target="_blank">
                        {work.company}
                      </a>
                    </H4>
                    <address>{work.location}</address>
                    <p className="text-sm italic">{work.description}</p>
                  </header>
                  <Summary summary={work.summary} />
                </div>
              ))}
          </section>
          <section className="mb-8">
            <H3>
              <Icon type="Volunteer" />
              Volunteer
            </H3>
            {volunteers &&
              volunteers.map((volunteer, index) => (
                <div key={index}>
                  <header>
                    <h5 className="float-right text-right font-bold">
                      {volunteer.position}
                    </h5>
                    <H4>
                      <a href={volunteer.website} target="_blank">
                        {volunteer.organization}
                      </a>
                    </H4>
                  </header>
                  <Summary summary={volunteer.summary} />
                </div>
              ))}
          </section>
          <section className="mb-8">
            <H3>
              <Icon type="Education" />
              Education
            </H3>
            {education &&
              education.map((edu, index) => (
                <div key={index}>
                  <header>
                    <div className="float-right text-right">
                      <h5 className="font-bold">{edu.studyType}</h5>
                      <TimeRange start={edu.startDate} end={edu.endDate} />
                    </div>
                    <H4>
                      <a href={edu.website} target="_blank">
                        {edu.institution}
                      </a>
                    </H4>
                  </header>
                  <Summary summary={edu.area} />
                </div>
              ))}
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
