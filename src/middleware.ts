import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const AuthRoutes = ["/register", "/login"];
const commonPrivateRouts = [
  "/dashboard",
  "/dashboard/change-password",
  "doctors",
];
const roleBasedPrivateRouts = {
  PATIENT: [/^\/dashboard\/patient/],
  DOCTOR: [/^\/dashboard\/doctor/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/super-admin/],
};

//! role type
type Role = keyof typeof roleBasedPrivateRouts;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = cookies().get("accessToken")?.value;
  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (
    (accessToken && commonPrivateRouts.includes(pathname)) ||
    commonPrivateRouts.some((route) => pathname.startsWith(route))
  ) {
    return NextResponse.next();
  }

  let decodedData = null;
  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }

  const role = decodedData?.role;

  if (role && roleBasedPrivateRouts[role as Role]) {
    const routes = roleBasedPrivateRouts[role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/login", "/register", "/dashboard/:page*", "/doctors/page*"],
};
