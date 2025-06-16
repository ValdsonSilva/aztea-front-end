import { getMiddlewareRouteMatcher } from "next/dist/shared/lib/router/utils/middleware-route-matcher"
import { NextRequest, NextResponse } from "next/server";

// Middleware será executado em toda rota
export function middleware(request: NextRequest) {
    // acessando o token pelos cookies
    const token = request.cookies.get("token")?.value;

    // verificando se o token existe na página do cliente
    if (!token && request.nextUrl.pathname !== "/login") {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
  matcher: '/about/:path*',
}