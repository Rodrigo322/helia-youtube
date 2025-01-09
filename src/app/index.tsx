import { useRouter } from "expo-router";
import { useEffect } from "react";
import Login from "./stacks/login";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const isLoggedIn = false;

      if (isLoggedIn) {
        return router.navigate("/tabs/home");
      } else {
        return <Login />;
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [router]);

  return <Login />;
}
