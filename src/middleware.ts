import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { authProtectedKey } from "./components/constants/globalConstants";
import { jwtDecode } from "jwt-decode";
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
    // If there's no access token and user is trying to access login/signup
    if (authRoutes.includes(pathName)) {
      return NextResponse.next();
    } else {
      // Redirect to login if not authenticated
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Allow paths that don't require role-based access
  if (
    accessToken &&
    (commonPath.includes(pathName) || pathName.startsWith("/doctors"))
  ) {
    return NextResponse.next();
  }

  // Decode the JWT token to get user role
  const decodedData: IJwtPayload = jwtDecode(accessToken?.value);
  const role = decodedData?.role;

  const rolebasedRoutes =
    rolebasedPrivateRoutes[role as keyof typeof rolebasedPrivateRoutes];

  // Allow role-based access
  if (role && rolebasedRoutes) {
    if (rolebasedRoutes.some((route) => pathName.match(route))) {
      return NextResponse.next();
    }
  }

  // Default redirect if no matching route is found
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/signup", "/dashboard/:page*", "/doctors/:page*"],
};
