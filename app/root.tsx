import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import clsx from 'clsx';
import { Theme, ThemeProvider, ThemeScriptTag, useTheme } from "./utils/theme-provider";

import tailwind from '~/tailwind.css?url'

import { Header } from "./header";
import { Footer } from "./footer";
import { getThemeSession } from "./utils/theme.server";

export type LoaderData = {
  theme: Theme | null;
}

export async function loader({ request, }: LoaderFunctionArgs) {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
];

function TempApp() {
  const data = useLoaderData<LoaderData>();
  const [theme] = useTheme();

  return (
    <html lang="en" className={clsx(theme)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ThemeScriptTag ssrTheme={Boolean(data.theme)} />
        <Meta />
        <Links />
      </head>
      <body className="theme font-sans leading-6 flex flex-col items-center">
        <div className="border-all h-dvh lg:w-1/2 md:w-3/4 w-full">
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const data = useLoaderData<LoaderData>();

  return (
    <ThemeProvider specifiedTheme={data.theme}>
      <TempApp />
    </ThemeProvider>
  )
}
