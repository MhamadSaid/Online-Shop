import React, { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const Product = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div className="border py-32 mt-10 border-[#359aff] h-[350px] mb-4 relative overflow-hidden group transition rounded-2xl">
      <div className="w-full h-full flex justify-center items-center">
        <div className="mb-16 w-[200px] mx-auto flex justify-center items-center">
          <img
            className="max-h-[160px] group-hover:scale-110 transition duration-300"
            src={image}
            alt=""
          />
        </div>
      </div>
      <div className="pl-4 pt-2">
        <div className="text-sm capitalize text-[#359aff] font-bold">
          {category}
        </div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1 text-[#181616] ">{title}</h2>
        </Link>
        <div className="font-semibold ">{price}</div>
      </div>

      <div className="absolute top-1 right-1 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button onClick={() => addToCart(product, id)}>
          <div className="flex justify-center items-center text-white w-10 h-10 bg-red-500">
            <BsPlus className="text-3xl" />
          </div>
        </button>

        <Link
          to={`/product/${id}`}
          className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl"
        >
          <BsEyeFill />
        </Link>
      </div>
    </div>
  );
};

export default Product;
