import React from "react";

const CardProduct = (props) => {
  const { image, name, price, votes } = props;
  return (
    <article className="container max-w-60 rounded-xl shadow-2xl overflow-hidden bg-slate-700">
      <figure className="relative w-full object-contain">
        <img src={image} alt="" className="hover:animate-pulse" />
        <span className="absolute flex items-center bg-yellow-500 top-2 mx-2 rounded-full px-2 ">
          <p className="text-sm">Popular</p>
        </span>
      </figure>
      <figcaption className="flex justify-between text-lg text-white px-2">
        <p className="text-lg font-semibold">{name}</p>
        <span>{price}</span>
      </figcaption>
      <span className="inline-flex gap-2 px-2">
        ⭐ <p className="text-white">4.7 ({votes})</p>
      </span>
    </article>
  );
};

export default CardProduct;
