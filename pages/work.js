import Head from 'next/head'

const workHistory = [
  {
    company: 'CloudMargin (YLD)',
    title: 'Team Lead / Software Engineer',
    description: 'This is a description',
    tech: [
      'NodeJS',
      'Typescript',
      'ReactJS',
      'AWS',
      'CucumberJS'
    ]
  },
  {
    company: 'DAZN (YLD)',
    title: 'Software Engineer',
    description: 'This is a description',
    tech: [
      'NodeJS',
      'Typescript',
      'ReactJS',
      'AWS',
      'Terraform'
    ]
  }
]

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joe Schofield</title>
        <link rel="icon" href="/js.ico" />
      </Head>

      <main>
        <h1 className="title">
          Work History
        </h1>

        <ul>
          <hr/>
          {
            workHistory.map(role => {
              return (
                <li>
                  <h3>{role.company}</h3>
                  <h5>{role.title}</h5>
                  <p>{role.description}</p>
                  <ul>
                    {role.tech.map(tech => {
                      return (
                        <li>
                          {tech}
                        </li>
                      );
                    })}
                  </ul>
                  <hr/>
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
