import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";

const schema = yup.object({
  aboutId: yup.string().max(50),
  section1: yup.string().required("Required."),
  section2: yup.string().required("Required."),
});

const AboutForm = ({
  defaultValues,
  path,
  mutateAsync,
  action,
  btnText,
  returnPath,
}) => {
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });
  const { section1, section2 } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    let data = {
      aboutId: formData.aboutId,
      section1: formData.section1,
      section2: formData.section2,
    };
    try {
      const { status } = await mutateAsync({
        path: path,
        formData: data,
      });
      if (status === 201) {
        toast.success("Saved successfully!");
        reset();
      }
      if (status === 204) {
        toast.success("Update successful!");
        router.push(returnPath);
      }
    } catch (error) {
      if (error.response) {
        toast.error("Response : " + error.response.data);
      } else if (error.request) {
        toast.error("Request : " + error.message);
      } else {
        toast.error("Error :", error.message);
      }
    } finally {
      setSubmitting(false);
      action();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("aboutId")} />

      <div className="form-col">
        <Input
          name="section1"
          label="Section 1"
          type="text"
          register={register}
          errorMessage={section1?.message}
        />
        <Input
          name="section2"
          label="Section 2"
          type="text"
          register={register}
          errorMessage={section2?.message}
        />

        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default AboutForm;
