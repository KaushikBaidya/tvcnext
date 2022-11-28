import React from "react";
import { useRouter } from "next/router";
import TopHeader from "../../../../components/admin/dashboard/TopHeader";
import { useGetData, usePutData } from "../../../../hooks/DataApi";
import { Loader } from "../../../../components/common/Loader";
import { Error } from "../../../../components/common/Error";
import AboutForm from "../../../../components/admin/forms/AboutForm";

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
  } = useGetData("about", `/about/${id}`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Edit About Us" btn="Return" path="/dashboard/about" />

      {data && (
        <AboutForm
          defaultValues={{
            aboutId: data.aboutId,
            section1: data.section1,
            section2: data.section2,
          }}
          action={refetch}
          btnText="Update"
          mutateAsync={mutateAsync}
          path={`/about/${data.aboutId}`}
          returnPath="/dashboard/about"
        />
      )}
    </div>
  );
}

export default Details;
