import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Project from "../components/Project";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KhaiStudys</title>
        <meta name="description" content="" />
        <link rel="icon" href="" />
      </Head>
      <Navbar />
      <Main />
      <Projects>
        <Project
          title="Testing"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          live="/"
          github="/"
        />
        <Project
          title="Testing"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          live="/"
          github="/"
        />
        <Project
          title="Testing"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          live="/"
          github="/"
        />
        <Project
          title="Testing"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          live="/"
          github="/"
        />
      </Projects>
    </div>
  );
}
