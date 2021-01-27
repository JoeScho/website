import Head from 'next/head'
import { educationHistory } from '../data/education';

export default function Education() {
  return (
    <div className="container">
      <Head>
        <title>Joe Schofield</title>
        <link rel="icon" href="/js.ico" />
      </Head>

      <main>
        <h1 className="title">
          <a className="plainlink" href="/">&larr;</a> Education History
        </h1>

        <ul>
          <hr />
          {
            educationHistory.map(education => {
              return (
                <li>
                  <h3>{education.level} <company>/ {education.school}</company> <date>{education.date}</date></h3>
                  <p>{education.description}</p>
                  <table>
                    <tr>
                      <th>Subject</th>
                      <th>Grade</th>
                    </tr>
                    {education.results.map(result => (
                      <tr>
                        <td>{result.subject}</td>
                        <td>{result.grade}</td>
                      </tr>
                    ))}
                  </table>
                  <hr />
                </li>
              );
            })
          }
        </ul>

      </main>

      <footer>
        Powered by Coffee
      </footer>
    </div>
  )
}
