import Head from 'next/head';
import workHistory from '../data/work';

export default function Work() {
  return (
    <div className="container">
      <Head>
        <title>Joe Schofield</title>
        <link rel="icon" href="/js.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a className="plainlink" href="/">&larr;</a> Work History
        </h1>

        <ul className="entry">
          <hr />
          {
            workHistory.map((role) => (
              <a className="plainlink" href={role.link} target="_blank">
                <li key={role.title}>
                  <h3>{role.title} <company>/ {role.company}</company> <date>{role.date}</date></h3>

                  <ul className="entrydescription">
                    {role.description.map(
                      (description) => <li key={description}>{description}</li>,
                    )}
                  </ul>
                  <strong>| {role.tech.map((tech) => (`${tech} | `))}</strong>
                  <hr />
                </li>
              </a>
            ))
          }
        </ul>

      </main>
    </div>
  );
}
