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

// TODO: READ BTG NOTEBOOK!!!
export default function Index() {
  return (
    <div className="resume">
      <div className="resume__header">
        <h2>Gustavo Luís Rodrigues Luchetti</h2>
        <h4><a href="mailto:gustavo@luchetti.dev">gustavo@luchetti.dev</a> </h4>
      </div>
      <div>
        <h3>WORK EXPERIENCE</h3>
        <section>
          <h4 className="job__detail">
            <p><span>Nitro Química</span> | 2023 - Present</p>
            <p>São Paulo, Brazil</p>
          </h4>
          <p className="job__title">Junior Data and Digital Business Analyst</p>
          <ul>
            <li>Upgraded internal spreadsheet tooling (was crucial in a number of sales that amounted to ~R$20MM in 2023) into full-fledged web application, enabling better access control, metrics and easier maintenance.</li>
            <li>Incremental automation and streamlining of the onboarding process for new sales representatives, decreasing mistakes and increasing visibility of the process company-wide.</li>
          </ul>
        </section>
        <section>
          <h4 className="job__detail">
            <p><span>Source.ag</span> | Aug/2022 - Feb/2023</p>
            <p>Amsterdam, Netherlands</p>
          </h4>
          <p className="job__title">Implementation Analyst</p>
          <ul>
            <li>Integrating onboarding steps into CLI client, decreasing time until farmers were completely onboard.</li>
          </ul>
        </section>
        <section>
          <h4 className="job__detail">
            <p><span>BTG Pactual Digital</span> | Jun/2021 - Jan/2022</p>
            <p>São Paulo, Brazil</p>
          </h4>
          <p className="job__title">Assistant Analyst, Intern Developer</p>
          <ul>
            <li>
              Web development for back-office applications, front-end using Angular, back-end API and services using .NET CORE with AWS Lambda, according to micro-services architecture.
            </li>
          </ul>
        </section>
        <section>
          <h4 className="job__detail">
            <p><span>Valemobi Consultoria Empresarial S/A</span> | Mar/2020 - Mar/2021</p>
            <p>São Paulo, Brazil</p>
          </h4>
          <p className="job__title">Intern Full-Stack Developer</p>
          <ul>
            <li>Development of software for the stock market, prototyping of interfaces, creation of pages using Angular, web services and maintenance of batch jobs on Kotlin and PostgreSQL, all according to object-oriented programming.</li>
          </ul>
        </section>
      </div>
      <div>
        <h3>EDUCATION</h3>
        <section>
          <h4 className="job__detail">
            <p><span>Utrecht University</span></p>
            <p>Utrecht, Netherlands</p>
          </h4>
          <p><i>Masters</i>, Artificial Intelligence - Graduation: Incomplete</p>
        </section>
        <section>
          <h4 className="job__detail">
            <p><span>Escola Superior de Propaganda e Marketing</span></p>
            <p>São Paulo, Brazil</p>
          </h4>
          <p><i>Bachelors</i>, Information Systems - Graduation: Dec/2021</p>
        </section>
      </div>
      <div>
        <h3>SKILLS</h3>
        <p>3+ years as a full-stack developer, experienced in process automation and data engineering.</p>
      </div>
    </div>
  );
}
