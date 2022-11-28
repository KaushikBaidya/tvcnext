import Image from "next/image";
import Link from "next/link";
import BuyNow from "../common/BuyNow";
import { Loader } from "../common/Loader";
import { useGetData } from "../../hooks/DataApi";

const ProductList = ({ dataPath }) => {
  const { data: list, isLoading } = useGetData("products", dataPath);

  if (isLoading) return <Loader />;

  const data = list.data;
  // const data = list.data.filter((el) => el.category === "1");

  return (
    <>
      <div className="py-2">
        <div className="max-w-6xl grid grid-cols-1 md:grid-cols-4 mx-auto px-5 gap-5">
          {data.map((item) => {
            return (
              <div
                key={item.productId}
                className="bg-green-50 flex flex-col items-center h-full py-5 rounded-xl hover:drop-shadow-lg justify-between "
              >
                <div className="p-5 rounded-3xl overflow-hidden">
                  <Image
                    src={`https://drive.google.com/thumbnail?id=${item.image}`}
                    width={200}
                    height={200}
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
    </>
  );
};

export default ProductList;