import Image from "next/image";
import Link from "next/link";
export default function About() {
  return (
    <>
      <header>
        <title>About | Phakkapon</title>
        <meta name="keyword" content="Phakkapon,Shop" />
      </header>
      <h1 className="text-3xl text-bold flex flex-col justify-center items-center hover:underline">
        I am a software developer with a passion
      </h1>
      <div className="flex justify-center items-center pt-10 py-10">
        <Image src="/about.svg" width={300} height={300} alt="logo" />
      </div>
      <p className=" text-2xl flex justify-center items-center">
        Welcome to Phakkapon Shop
      </p>
      <div className="flex justify-center items-center">
        <Link
          href="/"
          className="flex flex-col justify-center items-center w-60 bg-blue-500 text-white rounded px-0 py-2"
        >
          Home
        </Link>
      </div>
    </>
  );
}
