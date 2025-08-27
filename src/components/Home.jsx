import { useCallback, useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import Navbar from "./Navbar";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const GetProducts = useCallback(async () => {
    try {
      const response = await axios.get("https://fakestoreapi.in/api/products");
      if (response.data.status === "SUCCESS") {
        setProducts(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const SearchProducts = products.filter((item) =>
    // console.log("item:",item)
    item.title?.toLowerCase().includes(search.toLowerCase())
  );


  useEffect(() => {
    GetProducts();
  }, [search]);
  return (
    <>
      <Navbar value={search} handleChange={(e) => setSearch(e.target.value)} />
      <div className="w-full min-h-screen px-8 md:px-20 py-10 mx-auto flex flex-wrap gap-5 justify-center mdjustify-between ">
        {SearchProducts &&
          SearchProducts.map((item) => (
            <Cards
              key={item.id}
              title={item.title}
              brand={item.brand}
              image={item.image}
              id={item.id}
            />
          ))}
        {!SearchProducts &&
          products.map((item) => (
            <Cards
              key={item.id}
              title={item.title}
              brand={item.brand}
              image={item.image}
            />
          ))}
      </div>
    </>
  );
}
