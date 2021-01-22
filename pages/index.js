import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Joe Schofield</title>
        <link rel="icon" href="/js.ico" />
      </Head>

      <main>
        <h1 className="title">
          Hi, I'm Joe.
        </h1>

        <p className="description">
          I'm a <code>software engineer</code> 🧑‍💻
        </p>

        <div className="grid">
          <a href="/work" target="_blank" className="card">
            <h3>Work History &rarr;</h3>
            <p>Check out what I've been up to since I graduated</p>
          </a>

          <a href="/education" target="_blank" className="card">
            <h3>Education &rarr;</h3>
            <p>Grades, subjects, and cheap noodles</p>
          </a>

          <a href="https://medium.com/@joescho" target="_blank" className="card">
            <h3>Blog &rarr;</h3>
            <p>I write sometimes</p>
          </a>

          <a href="https://github.com/JoeScho" target="_blank" className="card">
            <h3>GitHub &rarr;</h3>
            <p>I code sometimes</p>
          </a>
        </div>
      </main>

      <footer>
          Powered by Coffee
      </footer>
    </div>
  )
}
