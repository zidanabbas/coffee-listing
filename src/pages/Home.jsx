import React, { useState, useEffect } from "react";
import { getProducts } from "../services/product.js";
import CardProduct from "../components/CardProduct.jsx";
import Button from "../components/buttons/Button.jsx";

function Home() {
  const [Products, setProducts] = useState([]);
  const [FilteredProducts, setFilteredProducts] = useState([]);
  const [FilterType, setFilterType] = useState(null);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handleFilterProduct = (type) => {
    if (type === "available-now" && FilterType !== "available-now") {
      const filtered = Products.filter((product) => {
        product.available === true;
      });
      setFilteredProducts(filtered);
      setFilterType("available-now");
    } else if (type === "all-products" && FilterType !== "all-products") {
      setFilteredProducts([]);
      setFilterType("all-products");
    }
  };

  return (
    <>
      <main className="w-full min-h-screen grid justify-center overflow-hidden">
        <div className="absolute bg-primary ">
          <figure className="">
            <img
              src="https://plus.unsplash.com/premium_photo-1661688695020-549871f98800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNvZmZlZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="object-cover w-full h-96"
            />
          </figure>
          <article className="relative grid justify-items-center bg-secondary mx-32 mobile:-top-28 p-16 rounded-lg">
            <h1 className="text-white text-3xl text-center">Our Collection</h1>
            <p className="flex text-third p-2 mt-2 w-2/4 mx-auto text-lg">
              Introducing our Coffee Collection, a selection of unique coffees
              from different roast types and origins, expertly roasted in small
              batches and shipped fresh weekly.
            </p>
            <div className="flex justify-center gap-5 mt-3">
              <Button
                ariaLable="all-products"
                onClick={() => handleFilterProduct("all-products")}
              >
                All Products
              </Button>
              <Button
                ariaLable="available-now"
                onClick={() => handleFilterProduct("available-now")}
              >
                Available Now
              </Button>
            </div>

            <div className="flex flex-wrap max-w-3xl mobile:max-w-4xl justify-center mt-5 p-5 gap-5">
              {FilterType === "available-now" ? (
                FilteredProducts.length > 0 ? (
                  FilteredProducts.map((product) => (
                    <CardProduct
                      key={product.id}
                      name={product.name}
                      price={product.price}
                      image={product.image}
                      votes={product.votes}
                    />
                  ))
                ) : (
                  <p className="text-white text-lg">No products available</p>
                )
              ) : (
                Products.map((product) => (
                  <CardProduct
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    votes={product.votes}
                  />
                ))
              )}
            </div>
          </article>
        </div>
      </main>
    </>
  );
}

export default Home;
