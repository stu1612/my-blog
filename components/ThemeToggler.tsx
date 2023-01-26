// npm
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

export default function ThemeToggler() {
  // state
  const [mounted, setMounted] = useState(false);

  // properties
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // methods
  const toggleTheme = () => {
    if (!mounted) return null;
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button type="button">
          <BsSunFill
            color="#f8c630"
            size={28}
            onClick={() => setTheme("light")}
          />
        </button>
      );
    } else {
      return (
        <button type="button">
          <MdDarkMode
            color="#00120"
            size={28}
            onClick={() => setTheme("dark")}
          />
        </button>
      );
    }
  };

  return toggleTheme();
}
