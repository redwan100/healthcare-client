import { isLoggedIn, removeUser } from "@/services/auth.service";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const isLogged = isLoggedIn();
  const router = useRouter();
  const handleLogout = () => {
    removeUser();
    router.refresh();
  };
  return (
    <>
      {isLogged ? (
        <Button color="error" onClick={handleLogout}>
          Logout
        </Button>
      ) : (
        <Button LinkComponent={Link} href="/login">
          Login
        </Button>
      )}
    </>
  );
};

export default AuthButton;
