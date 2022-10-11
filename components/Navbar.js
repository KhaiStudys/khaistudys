import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 bg-white border-b border-black border-opacity-10">
      <div className="w-full bg-red-100 text-red-500 text-center">
        Website under development please use with caution!
      </div>
      <nav className="container mx-auto p-4 flex">
        <Link href="/">
          <a className="text-xl font-medium">KhaiStudys</a>
        </Link>
        <ul className="ml-auto flex items-center gap-4">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Resume</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
