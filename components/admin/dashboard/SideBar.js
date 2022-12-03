import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  AiOutlineQrcode,
  AiOutlineDashboard,
  AiOutlineAntDesign,
  AiOutlineLogin,
  AiOutlineCopy,
  AiOutlineEnvironment,
} from "react-icons/ai";

import { useGlobalContext } from "../../../context/context";

import logoPic from "../../../public/images/logo.png";

function SideBar({ action }) {
  const value = useGlobalContext();

  return (
    <div className="fixed w-[200px] h-full bg-primary text-secondary drop-shadow-md">
      <div className="flex justify-center p-3">
        <Image src={logoPic} width={80} height={80} objectFit="cover" alt="" />
      </div>
      <div className="p-3 z-[1] relative ">
        <div className="h-full overflow-y-auto">
          <ul className="mt-5  text-left pl-3 flex flex-col gap-4 text-lg font-semibold ">
            <li onClick={() => action()} className="flex items-center gap-1">
              <AiOutlineDashboard className="text-orange mb-1" />
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </li>
            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiOutlineAntDesign className="text-orange mb-1" />
              <Link href="/dashboard/products">
                <a>Products</a>
              </Link>
            </li>

            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiOutlineQrcode className="text-orange mb-1" />
              <Link href="/dashboard/categories">
                <a>Categories</a>
              </Link>
            </li>
            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiOutlineCopy className="text-orange mb-1" />
              <Link href="/dashboard/about">
                <a>About</a>
              </Link>
            </li>
            <li onClick={() => action()} className="flex items-center gap-1 ">
              <AiOutlineEnvironment className="text-orange mb-1" />
              <Link href="/dashboard/footer">
                <a>Footer</a>
              </Link>
            </li>

            <li className="flex items-center gap-1 ">
              <AiOutlineLogin className="text-orange mb-1" />
              <button onClick={value.signOut}>
                <Link href="/">
                  <a>Sign Out</a>
                </Link>
              </button>
            </li>
          </ul>
        </div>

        <div className="fixed bottom-1">
          <p className="text-uppercase text-secondary text-sm">
            Developed By
            <a
              href="https://chimbukit.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold ml-2"
            >
              <span className="text-success">Chimbuk IT</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
