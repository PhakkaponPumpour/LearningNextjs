import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mx-auto my-2.5 px-0 py-2.5 bg-gray-600">
      <div className="flex items-center">
        <Link href="/">
          {" "}
          <Image
            className=" mr-auto pl-2.5"
            src="/logo.png"
            width={50}
            height={50}
            alt="Logo"
          />
        </Link>
      </div>
      <div>
        <Link
          className="text-white no-underline text-lg ml-3 p-2.5 hover:text-blue-500"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-white no-underline text-lg ml-3 p-2.5 hover:text-blue-500"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-white no-underline text-lg ml-3 p-2.5 hover:text-blue-500"
          href="/product"
        >
          All Product
        </Link>
      </div>
    </nav>
  );
}
