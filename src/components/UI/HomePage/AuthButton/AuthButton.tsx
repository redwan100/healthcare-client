import logoutUser from "@/services/actions/logoutUser";
import { isLoggedIn } from "@/services/auth.service";
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButton = () => {
  const isLogged = isLoggedIn();
  const router = useRouter();
  const handleLogout = () => {
    logoutUser(router);
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
