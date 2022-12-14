import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { en } from "../../../public/locales/en";
import { vn } from "../../../public/locales/vn";
import Fire from "../../../public/images/burning.jpg";
import Wood from "../../../public/images/woodpellets.jpg";
import { Loader } from "../../common/Loader";
import { Error } from "../../common/Error";
import { useGetData } from "../../../hooks/DataApi";

const AboutUs = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : vn;

  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("about", `/getAbout`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];
  console.log(data);
  return (
    <section
      id="seeAbout"
      className="grid grid-cols-1 px-6 justify-items-center pt-20 h-full"
    >
      <h1 className="text-2xl lg:text-5xl font-semibold mb-5">
        <span className="text-[#36B34B] uppercase">{t.title_about} </span>
        <span className="text-[#F5921E] uppercase">{t.title_us}</span>
      </h1>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center md:gap-5 my-5">
        <div className="h-56 rounded-lg overflow-hidden mx-5">
          <Image src={Fire} objectFit="contain" alt="" />
        </div>
        <div className="col-span-2 flex flex-col text-lg lg:text-2xl lg:pr-10">
          <p className="text-justify my-2">
            {locale === "en" ? data.section1 : data.section1_vn}
          </p>
        </div>
      </div>
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center md:gap-5 my-5">
        <div className="col-span-2 flex flex-col text-lg lg:text-2xl lg:pl-10">
          <p className="text-justify my-2">
            {locale === "en" ? data.section2 : data.section2_vn}
          </p>
          {/* <p className="text-justify my-2">{data.section2}</p> */}
        </div>
        <div className="h-56 rounded-lg overflow-hidden mx-5">
          <Image src={Wood} objectFit="contain" alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
