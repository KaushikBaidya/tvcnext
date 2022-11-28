import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import ProductForm from "../../../../components/admin/forms/ProductForm";

function Details() {
  const router = useRouter();
  const { id } = router.query;
  const { mutateAsync } = usePutData();

  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("products", `/products/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Edit Product" btn="Return" path="/dashboard/products" />

      {data && (
        <ProductForm
          defaultValues={{
            productId: data.productId,
            name: data.name,
            description: data.description,
            name_vn: data.name_vn,
            description_vn: data.description_vn,
            image: data.image,
            category: data.category,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/products/${data.productId}`}
          returnPath="/dashboard/products"
        />
      )}
    </div>
  );
}

export default Details;
