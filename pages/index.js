import { useEffect } from "react";
import { useAuth } from "../context/auth.tsx";
import NavbarCustom from "../components/NavbarCustom";
import Hero from "../components/Hero";

export default function Home() {
  const { loadingUser } = useAuth();

  useEffect(() => {
    if (loadingUser) {
    }
  }, [loadingUser]);

  return (
    <>
      <NavbarCustom />
      <Hero />
    </>
  );
}
