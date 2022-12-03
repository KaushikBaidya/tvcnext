import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import BuyNow from "../../../components/common/BuyNow";
import { Error } from "../../../components/common/Error";
import { Loader } from "../../../components/common/Loader";
import { useGetData } from "../../../hooks/DataApi";

const Category = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("productCategory", `/productCategory/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data;

  return (
    <section className="pt-28 pb-10">
      <div className="h-full grid grid-cols-1">
        <div className="pb-5">
          <h2 className="text-xl text-[#36B34B] font-semibold lg:text-2xl uppercase tracking-wider text-center">
            {data.length <= 0 ? "No Products Found" : "Products"}
          </h2>
        </div>
        <div className="py-2">
          <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 mx-auto px-5 gap-5">
            {data.length > 0 &&
              data.map((item) => {
                return (
                  <div
                    key={item.productId}
                    className="bg-green-50 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg justify-between "
                  >
                    <div className="p-5 rounded-3xl overflow-hidden">
                      <Image
                        src={`https://drive.google.com/thumbnail?id=${item.image}`}
                        width={220}
                        height={220}
                        alt=""
                      />
                    </div>
                    <Link href={`/product/${item.productId}`}>
                      <h2 className="text-center text-[#211A56] font-semibold text-lg uppercase p-5">
                        {item.name}
                      </h2>
                    </Link>
                    <div className="">
                      <BuyNow title={item.name} />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
