import React from "react";
import { useRouter } from "next/router";

function Language() {
  const router = useRouter();
  const { locale } = router;

  const LanguageChange = (e) => {
    router.push("/", "/", { locale: e.target.value });
  };


  return (
    <>
      <select
        className="p-1 text-gray-800 rounded text-lg font-bold uppercase"
        value={locale}
        onChange={LanguageChange}
      >
        <option value="en">EN</option>
        <option value="vn">VN</option>
      </select>
      
    </>
  );
}

export default Language;
