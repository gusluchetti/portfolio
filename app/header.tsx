import { NavLink } from "@remix-run/react";

const navClass = ({ isActive, isPending }: { isActive: boolean, isPending: boolean }) =>
  isPending ? "pending" : isActive ? "font-bold underline" : ""


export function Header() {
  return (
    <header>
      <nav className="flex flex-row gap-5">
        <NavLink to="/" className={navClass}>
          tti.dev
        </NavLink>
        <NavLink to="/blog" className={navClass}>
          blog
        </NavLink>
        <NavLink to="/cv" className={navClass}>
          cv
        </NavLink>
        <NavLink to="/now" className={navClass}>
          now
        </NavLink>
      </nav>
    </header>
  )
}
