import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { Loader } from "../../components/common/Loader";
import { Error } from "../../components/common/Error";
import { useGetData } from "../../hooks/DataApi";

const SinglePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: list,
    error,
    isLoading,
    isError,
  } = useGetData("products", `/products/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];

  return (
    <div className="md:flex items-start justify-center py-28 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
        <Image
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
          alt="hero"
          src={`https://drive.google.com/uc?export=view&id=${data.image}`}
          width={300}
          height={300}
        />
      </div>
      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <div className="border-b border-gray-200 mb-6">
            <h1>{data.name}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
