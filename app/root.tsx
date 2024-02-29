import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    NavLink,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";

import tailwind from '~/tailwind.css'

export const links: LinksFunction = () => [
    { rel: "stylesheet", href: tailwind },
    ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export function Header() {
    return (
        <header className="flex flex-row gap-5">
            <NavLink to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                tti.dev
            </NavLink>
            <NavLink to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                blog
            </NavLink>
            <NavLink to="/now"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }>
                now
            </NavLink>
        </header>
    )
}

export function Footer() {
    return (
        <footer>
        </footer>
    )
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <body className="font-sans leading-6">
                <Header />
                <Outlet />
                <Footer />

                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
