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
      <main className="absolute w-full min-h-screen bg-primary">
        <figure className="w-full">
          <img
            src="https://plus.unsplash.com/premium_photo-1661688695020-549871f98800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGNvZmZlZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
            className="object-cover w-full h-96"
          />
        </figure>
        <section className="max-w-full px-8">
          <article className="relative bg-secondary mobile:mx-16 dekstop:max-w-full -top-28 p-16 rounded-lg">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center dekstop:container">
                <h1 className="text-white text-[32px] text-center font-DM-sans">
                  Our Collection
                </h1>
                <p className="text-third font-DM-sans text-base mt-2 w-full mobile:w-2/3 dekstop:w-2/5 p-2 text-center mx-auto">
                  Introducing our Coffee Collection, a selection of unique
                  coffees from different roast types and origins, expertly
                  roasted in small batches and shipped fresh weekly.
                </p>
                <div className="flex justify-center gap-5 mt-3 w-80">
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
              </div>
              <div className="grid tablet:grid-cols-2 dekstop:grid-cols-3 max-w-3xl mobile:max-w-4xl justify-center mt-5 p-5 gap-6 tablet:gap-10">
                {FilterType === "available-now" ? (
                  FilteredProducts.length > 0 ? (
                    FilteredProducts.map((product) => (
                      <CardProduct
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                        rating={product.rating}
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
                      rating={product.rating}
                      votes={product.votes}
                    />
                  ))
                )}
              </div>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default Home;
