import {
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import styles from './styles.css?url'

export const links: LinksFunction = () => [
  {
    rel: "preload", href: './assets/Writer-Bold.woff2',
    as: 'font', type: 'font/woff2', crossOrigin: 'use-credentials'
  },
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
    <main>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="/blog">blog</NavLink></li>
            <li><NavLink to="/now">now</NavLink></li>
            <li><NavLink to="/resume">cv</NavLink></li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <Outlet />
      </div>
      <footer>
        <nav>
          <ul>
            <li>extras:</li>
            <li><a href="https://github.com/gusluchetti">github</a></li>
            <li><NavLink to="/inspirations"><i>inspirations</i></NavLink></li>
          </ul>
        </nav>
      </footer>
    </main>
  )
}
