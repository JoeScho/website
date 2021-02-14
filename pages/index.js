import Head from 'next/head'
import { getGreetings } from '../js/utils';

export default function Home() {
  const { header, subheader } = getGreetings();
  return (
    <div className="container">
      <Head>
        <title>Joe Schofield</title>
        <link rel="icon" href="/js.ico" />
      </Head>

      <main>
        <h1 className="title">
          {header}
        </h1>

        <p className="description">
          {subheader}
        </p>

        <p className="intro">
          I'm Joe, a software engineer at <a className="plainlink" href="https://www.yld.io/" target="_blank" >YLD</a> 🧑‍💻
          <br/>Passionate about open source, best practices, and environmental issues.
        </p>

        <div className="grid">
          <a href="/work" className="card">
            <h3>Work History &rarr;</h3>
            <p>Check out what I've been up to since I graduated</p>
          </a>

          <a href="/education" className="card">
            <h3>Education &rarr;</h3>
            <p>Grades, subjects, and cheap noodles</p>
          </a>
        </div>
      </main>

      <footer>
        <div className="links">
          <a href="https://www.linkedin.com/in/joescho/" target="_blank" >
            <img src="/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/JoeScho" target="_blank" >
            <img src="/github.png" alt="GitHub" />
          </a>
          <a href="https://medium.com/@joescho" target="_blank" >
            <img src="/medium.png" alt="Medium" />
          </a>
        </div>
        {/* Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> */}
      </footer>
    </div>
  )
}
