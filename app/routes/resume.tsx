import type { MetaFunction } from "@remix-run/react";

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
          <p className="job__title">Junior Data Analyst</p>
          <ul>
            <li>Upgraded internal spreadsheet tooling (crucial in sales that amounted to ~R$20MM in 2023) into full-fledged web application, enabling better access control, metrics and easier maintenance.</li>
            <li>Incremental automation and streamlining of the onboarding process for new sales representatives, increasing visibility of the process company-wide.</li>
          </ul>
        </section>
        <section>
          <h4 className="job__detail">
            <p><span>Source.ag</span> | Aug/2022 - Feb/2023</p>
            <p>Amsterdam, Netherlands</p>
          </h4>
          <p className="job__title">Implementation Analyst</p>
          <ul>
            <li>Transformed onboarding steps into internal CLI functions, decreasing errors and time to completion</li>
            <li>Made possible for non-technical teams of the company to do day-to-day fixes using a web interface (Retool)</li>
          </ul>
        </section>
        <section>
          <h4 className="job__detail">
            <p><span>BTG Pactual Digital</span> | Jun/2021 - Jan/2022</p>
            <p>São Paulo, Brazil</p>
          </h4>
          <p className="job__title">Assistant Analyst, Intern Developer</p>
          <ul>
            <li>Developed new pages and better views for backoffice web application</li>
            <li>Maintenance of cloud endpoints, updated logging and added new functionalities</li>
          </ul>
        </section>
        {/*
        <section>
          <h4 className="job__detail">
            <p><span>Valemobi Consultoria Empresarial S/A</span> | Mar/2020 - Mar/2021</p>
            <p>São Paulo, Brazil</p>
          </h4>
          <p className="job__title">Intern Full-Stack Developer</p>
          <ul>
            <li>Prototype and created new pages on the backoffice website</li>
            <li>Maintained recurring batch jobs that dealt with client payments</li>
          </ul>
        </section>
        */}
      </div>
      <div>
        <h3>EDUCATION</h3>
        <section>
          <h4 className="job__detail">
            <p><span>Utrecht University</span></p>
            <p>Utrecht, Netherlands</p>
          </h4>
          <p><i>Masters</i>, Artificial Intelligence | Feb/2022 - Paused</p>
        </section>
        <section>
          <h4 className="job__detail">
            <p><span>Escola Superior de Propaganda e Marketing</span></p>
            <p>São Paulo, Brazil</p>
          </h4>
          <p><i>Bachelors</i>, Information Systems | Graduated Dec/2021</p>
        </section>
      </div>
      <div>
        <h3>SKILLS</h3>
        <p>3+ years as a full-stack developer, most experienced in web development and process automation.</p>
      </div>
    </div>
  );
}
