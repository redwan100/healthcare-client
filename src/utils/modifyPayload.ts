import { TPatientRegisterFormData } from "@/app/register/page";

const modifyPayload = (values: TPatientRegisterFormData) => {
  const obj = { ...values };
  const data = JSON.stringify(obj);
  const formData = new FormData();
  formData.append("data", data);
  return formData;
};

export default modifyPayload;
