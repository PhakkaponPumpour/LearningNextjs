"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

interface ProductData {
  id: number;
  title: string;
  description: string;
  thumbnail: any;
  price: number;
  category: string;
  brand: string;
  // Add other fields from the API response as needed
}

async function getData(id: number): Promise<ProductData> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function Product() {
  const params = useParams() as { id: string };
  const id = params.id;

//   console.log("Params:", params);
//   console.log("ID:", id);

  const [data, setData] = useState<ProductData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        try {
        //   console.log("Fetching data for ID:", id);
          const result = await getData(Number(id));
        //   console.log("Data fetched:", result);
          setData(result);
        } catch (error) {
        //   console.error("Error fetching data:", error);
          setError("Failed to fetch data");
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
        setError("No ID provided");
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!data) return <p>No data found</p>;

  return (
    <>
      <div className="flex justify-center items-center pt-10">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <div className="flex flex-col md:flex-row ">
            <div className="mb-4 md:mb-0 md:mr-6 flex-shrink-0">
              <Image
                src={data.thumbnail}
                width={200}
                height={200}
                alt={data.title}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="text-left">
              <p className="text-xl font-bold mb-2">Product: {data.title}</p>
              <p className="text-lg font-bold mb-2">Price: ${data.price}</p>
              <p className="text-lg mb-2">Category: {data.category}</p>
              <p className="text-lg mb-2">Brand: {data.brand}</p>
              <p className="text-md">Product Detail: {data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
