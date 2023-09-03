import Link from "next/link";

import { FaFacebook, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
        <h1 className="text-3xl text-white grid place-content-center mb-2 md:mb-0 ">
          <Link
            href="/"
            className="text-white/80 ease-in-out duration-200 no-underline hover:text-white font-semibold"
          >
            Dawit Mellese{" "}
          </Link>
        </h1>
        <div className="flex flex-row justify-center sm:justify-evenly align-middle gap-6 text-white text-xl lg:text-2xl">
          <Link className="text-white/60 duration-500 ease-in-out hover:text-white" href="/">
            <FaFacebook />
          </Link>
          <Link className="text-white/60 duration-500 ease-in-out hover:text-white" href="/">
            <FaYoutube />
          </Link>
          <Link className="text-white/60 duration-500 ease-in-out hover:text-white" href="/">
            <FaTwitter />
          </Link>
          <Link className="text-white/60 duration-500 ease-in-out hover:text-white" href="/">
            <FaGithub />
          </Link>
        </div>
      </div>
    </nav>
  );
}
