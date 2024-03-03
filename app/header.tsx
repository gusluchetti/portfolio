import { NavLink } from "@remix-run/react";

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
