// npm
import { useRouter } from "next/router";
import Link from "next/link";

// files
import { navlinks } from "../lib/navLinks";
import Avatar from "./Avatar";
import ThemeToggler from "./ThemeToggler";

export default function Navigation() {
  // properties
  const router = useRouter();

  const { pathname } = router;

  return (
    <nav className="h-18 z-20 relative">
      <div className="flex items-center justify-between py-4 px-8 md:py-0 md:px-8 max-w-[1200px] mx-auto">
        <div className="flex items-center">
          <Avatar img="/images/profile.jpeg" />
          <ul className="hidden md:flex items-center">
            {navlinks.map((link, idx) => {
              return (
                <Link
                  href={`${link.path}`}
                  key={idx}
                  className={
                    pathname === link.path ? "active-link link" : "link"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </ul>
        </div>
        <div>
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
}
