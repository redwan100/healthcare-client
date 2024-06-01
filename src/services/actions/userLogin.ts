import { FieldValues } from "react-hook-form";
import setAccessToken from "./setAccessToken";
export const userLogin = async (data: FieldValues) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
      credentials: "include",
    }
  );

  const userData = await res.json();

  if (userData?.data?.accessToken) {
    setAccessToken(userData?.data?.accessToken, {
      redirect: "/dashboard",
    });
  }

  return userData;
};
