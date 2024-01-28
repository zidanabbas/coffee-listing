import React from "react";
import StarFill from "/Star_fill.svg";
import Star from "/Star.svg";

const CardProduct = (props) => {
  const { image, name, price, rating, votes, popular, available } = props;

  return (
    <>
      <article className="container min-w-64 min-h-56 rounded-xl shadow-2xl overflow-hidden">
        <figure className="relative w-full object-contain">
          <img src={image} alt="" className="hover:animate-pulse" />
          {popular && (
            <span className="absolute flex items-center bg-yellow-500 top-2 mx-2 rounded-full px-2 ">
              <p className="text-sm">Popular</p>
            </span>
          )}
        </figure>
        <figcaption className="flex my-1 justify-between items-center text-white px-2">
          <p className="font-DM-sans text-sm font-light">{name}</p>
          <span className="font-DM-sans text-xs bg-fourth text-primary px-1 rounded-sm">
            {price}
          </span>
        </figcaption>
        <span className="flex justify-between items-center gap-2 px-2 w-full">
          {rating && votes > 0 ? (
            <span className="flex items-center">
              <img src={StarFill} alt="" />
              <p className="text-third font-DM-sans text-sm">
                {rating} ({votes} votes)
              </p>
            </span>
          ) : (
            <span className="flex items-center">
              <img src={Star} alt="" />
              <p className="text-third font-DM-sans text-sm">No ratings</p>
            </span>
          )}
          {available === false ? (
            <span className="flex items-center font-DM-sans text-sm text-fifth">
              Sold out
            </span>
          ) : null}
        </span>
      </article>
    </>
  );
};

export default CardProduct;
