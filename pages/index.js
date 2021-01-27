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
          <a href="/work" className="card">
            <h3>Work History &rarr;</h3>
            <p>Check out what I've been up to since I graduated</p>
          </a>

          <a href="/education" className="card">
            <h3>Education &rarr;</h3>
            <p>Grades, subjects, and cheap noodles</p>
          </a>
          <p className="card-full">
{`With over four years of industry experience, I have a wealth of knowledge in many areas of product development including technical expertise, project management, colleague / client relationship building, team management, presenting, documenting, and improving communication between the product and development teams.

I am passionate about best practices, delivering quality software, and ensuring everyone is having a great time whilst doing so.

A company's attitude to environmental impact, diversity, and encouraging a healthy lifestyle (both physical and mental) is very important to me.`}
          </p>
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
        {/* <div className="credit">
          Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
        </div> */}
      </footer>
    </div>
  )
}
