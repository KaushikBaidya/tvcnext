import TopHeader from "../../../components/admin/dashboard/TopHeader";
import { usePostData } from "../../../hooks/DataApi";
import AboutForm from "../../../components/admin/forms/AboutForm";

const Add = () => {
  const defaultValues = {
    aboutId: "",
    section1: "",
    section2: "",
  };

  const { mutateAsync } = usePostData();

  return (
    <div className="card w-full max-w-screen-xl">
      <TopHeader title="Add About Us" btn="Return" path="/dashboard/about" />
      <AboutForm
        defaultValues={defaultValues}
        action={() => {}}
        btnText="Save"
        path="/about/createAboutUs"
        returnPath="/dashboard/about"
        mutateAsync={mutateAsync}
      />
    </div>
  );
};

export default Add;
