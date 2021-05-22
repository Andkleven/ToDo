import { useEffect } from "react";
import { useAuth } from "../context/auth.tsx";

export default function Home() {
  const { loadingUser } = useAuth();

  useEffect(() => {
    if (loadingUser) {
    }
  }, [loadingUser]);

  return <></>;
}
