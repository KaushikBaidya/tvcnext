import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SideBar from "../admin/dashboard/SideBar";
import Header from "../admin/dashboard/Header";
import { Loader } from "./Loader";
import Cookies from "universal-cookie";
const Private = ({ children }) => {
  const router = useRouter();
  const cookie = new Cookies();
  const getCookie = cookie.get("token");
  const [loading, setLoading] = useState(true);
  console.log(getCookie);
  useEffect(() => {
    if (!getCookie) router.push("/login");
    else {
      setLoading(false);
    }
  }, [getCookie, router]);

  if (loading) return <Loader />;
  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
        <div className="grid w-full h-screen max-w-screen-3xl mx-auto">
          <div className="hidden lg:block">
            <SideBar action={() => {}} />
          </div>
          <div className="grid grid-rows-twoRows w-full h-screen overflow-hidden ">
            <Header />
            <div className="overflow-y-auto">
              <div className="grid grid-cols-1 lg:ml-[200px]">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Private;
