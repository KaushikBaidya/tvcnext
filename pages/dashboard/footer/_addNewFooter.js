import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { usePostData } from "../../../hooks/DataApi";
import FooterForm from "../../../components/admin/forms/FooterForm";

const Add = () => {
  const defaultValues = {
    name: "",
    address: "",
    address2: "",
    email: "",
    email2: "",
    number: "",
    number2: "",
    facebook: "",
    whatsapp: "",
    twitter: "",
    youtube: "",
    zalo: "",
    wechat: "",
    viber: "",
  };

  const { mutateAsync } = usePostData();

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Add Footer" btn="Return" path="/dashboard/footer" />
      <FooterForm
        defaultValues={defaultValues}
        action={() => {}}
        btnText="Save"
        path="/footer/createFooter"
        returnPath="/dashboard/footer"
        mutateAsync={mutateAsync}
      />
    </div>
  );
};

export default Add;
