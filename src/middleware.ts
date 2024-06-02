import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  authProtectedKey,
  authStorageSaveKey,
} from "./components/constants/globalConstants";
import { JwtPayload, jwtDecode } from "jwt-decode";
import { getUserInfo } from "./services/authService/auth.service";
import { IJwtPayload } from "./interfaces";

// This function can be marked `async` if using `await` inside
const authRoutes = ["/login", "/signup"];
const commonPath = ["/dashboard", "/dashboard/change-password"];
const rolebasedPrivateRoutes = {
  DOCTOR: [/^\/dashboard\/doctor\/?.*/],
  PATIENT: [/^\/dashboard\/patient\/?.*/],
  ADMIN: [/^\/dashboard\/admin\/?.*/],
  SUPER_ADMIN: [/^\/dashboard\/super-admin\/?.*/],
};
export function middleware(request: NextRequest) {
  const pathName = request?.nextUrl?.pathname;
  const accessToken = cookies().get(authProtectedKey);
  if (!accessToken) {
    if (authRoutes.includes(pathName)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (accessToken && commonPath.includes(pathName)) {
    return NextResponse.next();
  }
  const decodedData: IJwtPayload = jwtDecode(accessToken?.value);
  const role = decodedData?.role;

  const rolebasedRoutes =
    rolebasedPrivateRoutes[role as keyof typeof rolebasedPrivateRoutes];

  if (role && rolebasedRoutes) {
    if (rolebasedRoutes.some((route) => pathName.match(route))) {
      return NextResponse.next();
    }
  }
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/signup", "/dashboard/:page*"],
};
