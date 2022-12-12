import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import FooterForm from "../../../../components/admin/forms/FooterForm";

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
  } = useGetData("footer", `/footer/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader
        title="Edit Footer Section"
        btn="Return"
        path="/dashboard/footer"
      />

      {data && (
        <FooterForm
          defaultValues={{
            footerId: data.footerId,
            name: data.name,
            address: data.address,
            address2: data.address2,
            email: data.email,
            email2: data.email2,
            number: data.number,
            number2: data.number2,
            facebook: data.facebook,
            whatsapp: data.whatsapp,
            twitter: data.twitter,
            youtube: data.youtube,
            zalo: data.zalo,
            wechat: data.wechat,
            viber: data.viber,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/footer/${data.footerId}`}
          returnPath="/dashboard/footer"
        />
      )}
    </div>
  );
}

export default Details;
