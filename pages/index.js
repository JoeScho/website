import Head from 'next/head';
import getGreetings from '../js/getGreetings';

export default function Home() {
  const { header, subheader } = getGreetings();
  return (
    <div className="container">
      <Head>
        <title>Joe Schofield</title>
        <link rel="icon" href="/js.ico" />
        <script src="https://kit.fontawesome.com/d9a14fbd57.js" crossOrigin="anonymous"></script>
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
    </div>
  );
}
