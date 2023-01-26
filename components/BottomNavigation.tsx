import { FaBlogger } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { navlinks } from "../lib/navLinks";
import Link from "next/link";
import { useRouter } from "next/router";

export default function BottomNavigation() {
  const icons = [FaHome, FaUserCircle, FaBlogger];
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav className="border-t-2 bg-white dark:bg-black fixed bottom-0 w-full p-6 md:hidden">
      <ul className="flex items-center justify-between md:hidden">
        {navlinks.map((link, idx) => {
          const Icon = icons[idx];
          return (
            <Link
              href={`${link.path}`}
              key={idx}
              className={
                pathname === link.path ? "active-mobile-link" : "mobile-link"
              }
            >
              <Icon className="text-2xl mb-1" />
              {link.name}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}
