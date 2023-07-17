import { useState } from "react";

export const loadTheme = (clickedTheme, theme) => {
  if (clickedTheme === theme) {
    setTheme("");
  } else {
    setTheme(clickedTheme);
  }
};
p;
