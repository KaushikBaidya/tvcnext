import React from "react";
import EditButton from "../../../components/common/button/EditButton";
import {
  ListCol,
  ListHeader,
} from "../../../components/admin/dashboard/ListColWithHeader";
import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { useGetData } from "../../../hooks/DataApi";
import DeleteButton from "../../../components/common/button/DeleteButton";
import { Loader } from "../../../components/common/Loader";
import { Error } from "../../../components/common/Error";

export default function FooterList() {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("footer", `/footer/getFooters`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data;

  return (
    <div className="card w-full">
      <TopHeader title="Footer Information" />
      {/* <TopHeader title="Address List" btn="Save" path="/dashboard/footer/add" /> */}

      <div className="list-wrapper">
        <div className="md:grid grid-cols-5 list-header">
          <ListHeader label="Name" />
          <ListHeader label="Address" />
          <ListHeader label="Email" />
          <ListHeader label="Number" />
          <ListHeader label="" />
        </div>
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.footerId}
              className="grid grid-cols-1 md:grid-cols-5 list-body"
            >
              <ListCol label="Company Name :" value={item.name} />
              <ListCol label="Address :" value={item.address} />
              <ListCol label="Email :" value={item.email} />
              <ListCol label="Number :" value={item.number} />
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton
                    path={`/dashboard/footer/edit/${item.footerId}`}
                  />
                  {/* <DeleteButton
                    path={`/footer/${item.footerId}`}
                    action={refetch}
                  /> */}
                </div>
              </div>
            </div>
          ))}

        <div className="list-footer">
          <div className="col-span-10"></div>
          <div className="flex justify-center">
            <span className="font-semibold">TOTAL : {data.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
