import Link from "next/link";

export default function Project({ title, desc, live, github }) {
  return (
    <div className=" flex flex-col gap-3 mt-6 p-6 w-full lg:w-[45%] xl:max-w-[30%] rounded border border-gray-300">
      <h3 className="text-xl font-medium">{title}</h3>
      <p>{desc}</p>
      <div className="flex gap-4">
        <button className="px-4 py-2 rounded bg-yellow-200">
          <Link href={live}>View Live</Link>
        </button>
        <button className="px-4 py-2 rounded bg-transparent underline">
          <Link href={github}>View on Github</Link>
        </button>
      </div>
    </div>
  );
}
