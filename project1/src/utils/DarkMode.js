import { useState, useEffect } from "react";

export const store = {
  dark: false,
};

export function toggleTheme() {
store.dark ? store.dark = false : store.dark = true;
}




  