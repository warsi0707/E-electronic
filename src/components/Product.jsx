import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "./Navbar";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});


  const HandleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.in/api/products/${id}`
      );
      if (response.data.status === "SUCCESS") {
        setProduct(response.data.product);
      }

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    HandleProduct();
  }, [id]);
  return (
    <>
      <Navbar />
      <div className=" px-5 h-full md:w-[700px] mx-auto py-5">
        <img className="w-full h-96 rounded-4xl" src={product.image} alt="" />
        <div className="space-y-5 mt-5 md:px-10">
          <div className="flex justify-between items-center">
            <div className="md:space-y-2">
              <h1 className="text-xl md:text-2xl font-semibold">
                {product.title}
              </h1>
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold">{product.brand}</p>
                  <p className="text-gray-500">{product.category}</p>
                </div>
                <div>
                  <p className="font-semibold">Price: {product.price}</p>
                  <p className="text-gray-500">
                    Discount: {product.discount} %
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              {/* {book?.subjects.map((item)=> (
               <p key={item}>{item}</p>
            ))} */}
            </div>
          </div>
          <p>{product.description}</p>
        </div>
      </div>
    </>
  );
}
