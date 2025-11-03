import { useState, useEffect } from "react";

export function useAuth() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("ff_user") || "null");
    } catch {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("ff_user", JSON.stringify(user));
  }, [user]);

  function login(dummyUser, token) {
    localStorage.setItem("ff_token", token);
    setUser(dummyUser);
  }
  function logout() {
    localStorage.removeItem("ff_token");
    setUser(null);
  }

  return { user, login, logout };
}
