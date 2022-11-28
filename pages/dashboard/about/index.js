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

export default function About() {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("about", `/getAbout`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data;

  return (
    <div className="card w-full">
      <TopHeader title="About Us" btn="Save" path="/dashboard/about/add" />

      <div className="list-wrapper">
        <div className="md:grid grid-cols-3 list-header">
          <ListHeader label="Section 1" />
          <ListHeader label="Section 2" />
          <ListHeader label="" />
        </div>
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.aboutId}
              className="grid grid-cols-1 md:grid-cols-3 list-body"
            >
              <ListCol label="Section 1:" value={item.section1} />
              <ListCol label="Section 2:" value={item.section2} />
              <div>
                <div className="flex justify-end space-x-2">
                  <EditButton path={`/dashboard/about/edit/${item.aboutId}`} />
                  <DeleteButton
                    path={`/about/${item.aboutId}`}
                    action={refetch}
                  />
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
