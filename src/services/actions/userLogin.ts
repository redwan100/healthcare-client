"use server";

import { TUserLogin } from "@/app/login/page";

export const userLogin = async (data: TUserLogin) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const userData = await res.json();

  return userData;
};
