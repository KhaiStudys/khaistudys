import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Project from "../components/Project";

import Image from "next/image";

let imageSrc = "../public/favicon.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>KhaiStudys</title>
        <meta name="description" content="" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <Navbar />
      <Main />
      <Projects>
        <Project
          title="Personal Portfolio Website - Current Website"
          desc="This website is my personal portfolio website where I showcase all my skills and the work I have done in the past."
          live="/"
          github="https://github.com/KhaiStudys/khaistudys"
        />
      </Projects>
    </div>
  );
}
