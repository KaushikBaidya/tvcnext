import React from "react";
import ProductList from "../../components/common/ProductList";

const Mineral = () => {
  return (
    <>
      <section className="pt-28 pb-10">
        <div className="h-full grid grid-cols-1">
          <div className="pb-5">
            <h2 className="text-xl text-[#36B34B] font-semibold lg:text-2xl uppercase tracking-wider text-center">
              Mineral Products
            </h2>
          </div>
          <ProductList dataPath={`/getMineral`} />
        </div>
      </section>
    </>
  );
};

export default Mineral;
