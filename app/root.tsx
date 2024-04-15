import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/cloudflare";

import styles from './styles.css?url'

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <div className="wrapper">
      <nav>
        <ul>
          <li><NavLink to="/">home</NavLink></li>
          <li><NavLink to="/about">about</NavLink></li>
          <li><NavLink to="/resume">resume</NavLink></li>
          <li><NavLink to="/blog">blog</NavLink></li>
          <li><NavLink to="/now">now</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
