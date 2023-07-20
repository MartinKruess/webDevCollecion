import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const LoadTheme = ({ children }) => {
  const [theme, setTheme] = useState("");
  console.log({ theme });

  useEffect(() => {}, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
