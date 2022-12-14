import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhoneCall,
} from "react-icons/fi";
import { FaWhatsapp, FaViber } from "react-icons/fa";
import { SiZalo, SiWechat } from "react-icons/si";
import { useGetData } from "../../../hooks/DataApi";
import logoPic from "../../../public/images/logo.png";
import { Error } from "../../common/Error";
import { Loader } from "../../common/Loader";
// import { useTranslation } from "react-i18next";

const Footer = () => {
  const {
    data: list,
    error,
    isLoading,
    isError,
    refetch,
  } = useGetData("footer", `/footer/getFooters`);

  if (isLoading) return <Loader />;

  if (isError) return <Error message={error.message} />;

  const data = list.data[0];

  return (
    <>
      <div className="w-full grid grid-cols-1 justify-items-center py-10 bg-white">
        <div className="flex justify-center items-center">
          <div className="w-20 mx-5 cursor-pointer ">
            <Image
              src={logoPic}
              width={60}
              height={60}
              objectFit="cover"
              alt=""
            />
          </div>
        </div>

        <div className="max-w-[1500px] grid grid-cols-1 md:grid-cols-3 justify-items-center gap-y-2 py-2 mt-2">
          <div className="pl-10">
            <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-left px-5 flex items-center gap-2 my-3">
              <span className="text-[20px] font-bold text-[#36B34B]">
                {data.name}
              </span>
            </p>
            {data.address && (
              <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-left px-5 flex items-center gap-2 my-3">
                <FiMapPin size={36} />
                <span className="font-normal text-gray-700">
                  {data.address}
                </span>
              </p>
            )}
            {data.address2 && (
              <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-left px-5 flex items-center gap-2 my-3">
                <FiMapPin size={36} />
                <span className="font-normal text-gray-700">
                  {data.address2}
                </span>
              </p>
            )}
            {data.email && (
              <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-center px-5 flex items-center gap-2 my-3">
                <FiMail />
                <span className="text-lg text-gray-700">{data.email}</span>
              </p>
            )}
            {data.email2 && (
              <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-center px-5 flex items-center gap-2 my-3">
                <FiMail />
                <span className="text-lg text-gray-700">{data.email2}</span>
              </p>
            )}
            {data.number && (
              <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-center px-5 flex items-center gap-2 my-3">
                <FiPhoneCall />
                <span className="text-lg text-gray-700">{data.number}</span>
              </p>
            )}
            {data.number2 && (
              <p className="text-sm lg:text-lg text-[#36B34B] font-normal text-center px-5 flex items-center gap-2 my-3">
                <FiPhoneCall />
                <span className="text-lg text-gray-700">{data.number2}</span>
              </p>
            )}
          </div>

          <div>
            <p className="text-lg text-gray-700 font-semibold font-sans text-center px-5 mb-3">
              Quick Links
            </p>
            <div className="text-[#36B34B] grid grid-cols-1 justify-items-center">
              <p>
                <a href="#seeHero">HOME</a>
              </p>
              <p>
                <a href="#seeAbout">ABOUT</a>
              </p>
              <p>
                <a href="#seeProduct">PRODUCTS</a>
              </p>
              <p>
                <a href="#seeContact">CONTACT US</a>
              </p>
              <p>
                <Link href="/login">LOGIN</Link>
              </p>
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-1 justify-items-center">
              <h1 className="text-[12px] lg:text-[16px] text-gray-700 font-semibold sm:mt-2 text-center px-5 uppercase">
                STAY CONNECTED
              </h1>
              <hr className="h-[2px] w-[100px] bg-[#F5921E]" />
            </div>
            <div className="w-full grid grid-cols-4 gap-4 py-3">
              {data.facebook && (
                <div className="social-icons bg-[#4267B2]">
                  <a href={data.facebook}>
                    <FiFacebook size={26} />
                  </a>
                </div>
              )}
              {data.twitter && (
                <div className="social-icons bg-[#1DA1F2]">
                  <a href={data.twitter}>
                    <FiTwitter size={26} />
                  </a>
                </div>
              )}
              {data.youtube && (
                <div className=" bg-[#FF0000] social-icons">
                  <a href={data.youtube}>
                    <FiYoutube size={26} />
                  </a>
                </div>
              )}

              <div className=" bg-[#0072b1] social-icons">
                <a href="#f">
                  <FiLinkedin size={26} />
                </a>
              </div>
              <div className=" bg-[#25D366] social-icons">
                <a href="#f">
                  <FaWhatsapp size={26} />
                </a>
              </div>
              <div className=" bg-[#005BE0] social-icons">
                <a href="#f">
                  <SiZalo size={26} />
                </a>
              </div>
              <div className=" bg-[#09B83E] social-icons">
                <a href="#f">
                  <SiWechat size={26} />
                </a>
              </div>
              <div className=" bg-[#7D3DAF] social-icons">
                <a href="#f">
                  <FaViber size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center text-sm pb-16 md:pb-0 bg-[#36B34B] py-1">
        <p className="text-uppercase font-semibold text-gray-200">
          ©{new Date().getFullYear()}
          <span className="ml-2">TVC Vietnam All rights reserved</span>
        </p>
        <p className="text-uppercase text-gray-200">
          Developed By
          <a
            href="https://chimbukit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold ml-2"
          >
            <span className="">Chimbuk IT</span>
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
