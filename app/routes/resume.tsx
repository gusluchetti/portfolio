import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "my cv" },
    {
      name: "description",
      content: "a printable page that contains my most up-to-date cv",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Gustavo Luís Rodrigues Luchetti</h1>
      <h2>São Paulo, Brazil | gustavo@luchetti.dev | <a href="https://www.linkedin.com/in/gustaluchetti/">linkedin</a></h2>
      <div>
        <h3>Work Experience</h3>
        <section>
          <h4 className="job-detail">
            <span>Nitro Química - São Paulo, Brazil</span>
            <span>2023 - Present</span>
          </h4>
          <p>Junior Data and Digital Business Analyst</p>
          <ul>
            <li>Digitalizing internal tooling, elevating day-to-day productivity for our partners out in the field.</li>
          </ul>
        </section>
        <section>
          <h4 className="job-detail">
            <span>Source.ag - Amsterdam, Netherlands</span>
            <span>Aug/2022 - Feb/2023</span>
          </h4>
          <p>Implementation Analyst</p>
          <ul>
            <li>
              Integration and onboarding of new clients into the company (Excel, PostgreSQL), working alongside the data platform team, automation and improvement of existing processes (Python w/ Pandas, Web APIs).
            </li>
          </ul>
        </section>
        <section>
          <h4 className="job-detail">
            <span>BTG Pactual Digital - São Paulo, Brazil</span>
            <span>Jun/2021 - Jan/2022</span>
          </h4>
          <p>Assistant Analyst, Intern Developer</p>
          <ul>
            <li>
              Web development for back-office applications, front-end using Angular, back-end API and services using .NET CORE with AWS Lambda, according to micro-services architecture.
            </li>
          </ul>
        </section>
        <section>
          <h4 className="job-detail">
            <span>Valemobi Consultoria Empresarial S/A - São Paulo, Brazil</span>
            <span>Mar/2020 - Mar/2021</span>
          </h4>
          <p>Intern Full-Stack Developer</p>
          <ul>
            <li>Development of software for the stock market, prototyping of interfaces, creation of pages using Angular, web services and maintenance of batch jobs on Kotlin and PostgreSQL, all according to object-oriented programming.</li>
          </ul>
        </section>
      </div>
      <div>
        <h3>Education</h3>
        <section>
          <h4>Utrecht University - Utrecht, Netherlands</h4>
          <p><b>Masters</b> in Artificial Intelligence</p>
          <p>Graduation Date: Incomplete</p>
        </section>
        <section>
          <h4>Escola Superior de Propaganda e Marketing - São Paulo, Brazil</h4>
          <p><b>Bachelors</b> in Information Systems</p>
          <p>Graduation Date: Dec/2021</p>
        </section>
      </div>
      <div>
        <h3>Skills</h3>
        <p>funny and pretty and smart!</p>
      </div>
    </div>
  );
}
