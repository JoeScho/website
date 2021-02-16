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

        <ul>
          <hr />
          {
            workHistory.map((role) => (
                <li key={role.title}>
                  <h3>{role.title} <company>/ {role.company}</company> <date>{role.date}</date></h3>

                  <p>{role.description}</p>
                  <strong>| {role.tech.map((tech) => (`${tech} | `))}</strong>
                  <hr />
                </li>
            ))
          }
        </ul>

      </main>

      <footer>
        Powered by Coffee
      </footer>
    </div>
  );
}
