import Image from "next/image";
import Link from "next/link";
async function getData() {
  const res = await fetch("https://dummyjson.com/products?limit=12");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Product() {
  const data = await getData();
  return (
    <>
      <header>
        <title>Product | Phakkapon</title>
        <meta name="keyword" content="Phakkapon,Shop" />
      </header>
      <div>
        <h1 className="text-3xl font-semibold">Product</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-6">
        {data.products.map((item: any) => (
          <div
            key={item.id}
            className="bg-white border rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4"
          >
            <Link href={`/product/${item.id}`}>
              <h2 className="text-xl font-semibold mb-4 text-center">
                {item.title}
              </h2>
              <div className="flex items-center justify-center w-full h-60 mb-4">
                <Image
                  src={item.thumbnail}
                  width={200}
                  height={200}
                  alt={item.title}
                  className="object-cover"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
