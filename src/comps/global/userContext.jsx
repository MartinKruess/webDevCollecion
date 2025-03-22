import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const LoadTheme = ({ children }) => {
  const [userData, setUserData] = useState({
    title: `Willkommen ${this.username}`,
    username: "Gast",
    imgLink: "",
    jsRank: "beginner",
    reactRank: "beginner",
    fullstackRank: "beginner",
    avg: 0,
  });

  useEffect(() => {}, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
