import { LOGIN_ROUTE } from "@/utils/route";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthGuard() {
  const pathname = usePathname();

  return (
    <div className="container">
      {/* <pre className="mt-20">You are trying to access: {pathname}</pre>
      You have found a secret place! Please{" "} */}
      <div className="mt-20 text-center">
        Please{" "}
        <Link
          href={`${LOGIN_ROUTE}?continueTo=${pathname}`}
          className="text-blue-500"
        >
          {" "}
          Log In
        </Link>{" "}
        to continue.
      </div>
    </div>
  );
}
