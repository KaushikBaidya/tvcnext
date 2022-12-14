import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import Input from "../Input";
import SaveButton from "../../common/button/SaveButton";

const schema = yup.object({
  footerId: yup.string().max(500),
  name: yup.string().required("Required.").max(500),
  address: yup.string().required("Required.").max(500),
  address2: yup.string().max(500),
  email: yup.string().required("Required.").max(500),
  email2: yup.string().max(500),
  number: yup.string().required("Required.").max(500),
  number2: yup.string().max(500),
  facebook: yup.string().max(500),
  whatsapp: yup.string().max(500),
  twitter: yup.string().max(500),
  youtube: yup.string().max(500),
  zalo: yup.string().max(500),
  wechat: yup.string().max(500),
  viber: yup.string().max(500),
});

const FooterForm = ({
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
  const {
    name,
    address,
    address2,
    email,
    email2,
    number,
    number2,
    facebook,
    whatsapp,
    twitter,
    youtube,
    zalo,
    wechat,
    viber,
  } = errors;

  const onSubmit = async (formData) => {
    setSubmitting(true);
    let data = {
      footerId: formData.footerId,
      name: formData.name,
      address: formData.address,
      address2: formData.address2,
      email: formData.email,
      email2: formData.email2,
      number: formData.number,
      number2: formData.number2,
      facebook: formData.facebook,
      whatsapp: formData.whatsapp,
      twitter: formData.twitter,
      youtube: formData.youtube,
      zalo: formData.zalo,
      wechat: formData.wechat,
      viber: formData.viber,
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
      <input type="hidden" {...register("footerId")} />

      <div className="form-col">
        <Input
          name="name"
          label="Company Name"
          type="text"
          register={register}
          errorMessage={name?.message}
        />
        <Input
          name="address"
          label="Main Address"
          type="text"
          register={register}
          errorMessage={address?.message}
        />
        <Input
          name="address2"
          label="Alternative Address"
          type="text"
          register={register}
          errorMessage={address2?.message}
        />
        <Input
          name="email"
          label="Main Email"
          type="text"
          register={register}
          errorMessage={email?.message}
        />
        <Input
          name="email2"
          label="Alternative Email"
          type="text"
          register={register}
          errorMessage={email2?.message}
        />
        <Input
          name="number"
          label="Main Number"
          type="text"
          register={register}
          errorMessage={number?.message}
        />
        <Input
          name="number2"
          label="Alternative number"
          type="text"
          register={register}
          errorMessage={number2?.message}
        />
        <Input
          name="facebook"
          label="Facebook Link"
          type="text"
          register={register}
          errorMessage={facebook?.message}
        />
        <Input
          name="whatsapp"
          label="Whatsapp Link"
          type="text"
          register={register}
          errorMessage={whatsapp?.message}
        />
        <Input
          name="twitter"
          label="Twitter Link"
          type="text"
          register={register}
          errorMessage={twitter?.message}
        />
        <Input
          name="youtube"
          label="Youtube Link"
          type="text"
          register={register}
          errorMessage={youtube?.message}
        />
        <Input
          name="zalo"
          label="Zalo Link"
          type="text"
          register={register}
          errorMessage={zalo?.message}
        />
        <Input
          name="wechat"
          label="WeChat Link"
          type="text"
          register={register}
          errorMessage={wechat?.message}
        />
        <Input
          name="viber"
          label="Viber Link"
          type="text"
          register={register}
          errorMessage={viber?.message}
        />

        <SaveButton btnText={btnText} disabled={submitting} />
      </div>
    </form>
  );
};

export default FooterForm;
