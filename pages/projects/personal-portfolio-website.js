import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function personalPortfolioWebsite() {
  let title = "Personal Portfolio Website";
  let date = "October 2022";
  let tags = "#Full-Stack #NextJS";
  return (
    <>
      <Navbar />
      <div className="max-w-[800px] mx-auto my-8 px-4 flex flex-col gap-10">
        <p className="opacity-50">
          {date} {"|"} {tags}
        </p>
        <section className="flex flex-col gap-4 ">
          <h1 className="font-bold text-3xl capitalize">{title}</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="w-full h-96 bg-slate-300 rounded-lg"></div>
          <a className="italic text-xs mx-auto opacity-50 underline">
            Image from unsplash
          </a>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="flex flex-col gap-4">
          <p className="uppercase font-medium opacity-50">Challenges</p>
          <h2 className="font-bold text-2xl capitalize">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </h2>
          <p>
            Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
        </section>
        <section className=" flex flex-col gap-4">
          <p className="uppercase font-medium opacity-50">Conclusion</p>
          <h2 className="font-bold text-2xl capitalize">
            Accusantium doloremque laudantium
          </h2>
          <p>
            Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <p>
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
            suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
            autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur?
          </p>
        </section>
        <section className="flex items-center">
          <p>
            Follow me on{" "}
            <a className="underline text-blue-600" href="">
              Twitter
            </a>{" "}
            |{" "}
            <a className="underline text-blue-600" href="">
              Tiktok
            </a>{" "}
            |{" "}
            <a className="underline text-blue-600" href="">
              Instagram
            </a>
          </p>
          <Link href="/">
            <p className="ml-auto px-4 py-2 border border-gray-300 cursor-pointer rounded">
              {"< "}Back Home
            </p>
          </Link>
        </section>
      </div>
    </>
  );
}
