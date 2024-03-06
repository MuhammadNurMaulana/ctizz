import RoutesToLogin from "./components/routes-to-login"
import NavMenu from "./components/nav-menu"

export function Navbar() {
  return (
    <nav className="relative z-20 px-8 py-4 w-full">
      <NavMenu navMenu={navMenu}>
        <RoutesToLogin />
      </NavMenu>
    </nav>
  )
}

const navMenu = [
  {
    titlle: "Home",
    href: "/",
  },
  {
    titlle: "Shop",
    href: "/",
  },
  {
    titlle: "Our Story",
    href: "/",
  },
  {
    titlle: "Blog",
    href: "/",
  },
  {
    titlle: "Contact Us",
    href: "/",
  },
]
