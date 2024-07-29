import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <header>
        <title>Home | Phakkapon</title>
        <meta name="keyword" content="Phakkapon,Shop" />
      </header>
      <h1 className="text-4xl text-bold flex flex-col justify-center items-center">
        Hello Next.js
      </h1>
      <div className=" text-2xl flex justify-center items-center pt-10 py-10  ">
        <Image src="/shopping.svg" width={400} height={400} alt="logo" />
      </div>
      <p className=" text-2xl flex justify-center items-center">
        Welcome to Phakkapon Shop
      </p>
      <div className="flex justify-center items-center pt-15">
        <button className="flex flex-col justify-center items-center w-60 bg-blue-500 text-white rounded px-0 py-2">
          <Link href="/product">All Product</Link>
        </button>
      </div>
    </>
  );
}
