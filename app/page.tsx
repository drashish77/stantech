import Search from "@/components/Search";
import { LOGIN_ROUTE } from "@/utils/route";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mt-5 ">
      {/* <Search /> */}
      <h1 className="text-center mb-5">This is a simple task management app</h1>
      <p></p>
      {/* <div className="relative">
        <Image src="/tm.svg" alt="login image" className="ml-2" fill priority />
      </div> */}
      <div className="flex justify-center items-center">
        <div className="relative w-96 h-96 border-[3px] rounded-md ">
          <Image
            src="/tm.svg"
            fill
            alt=""
            className="object-contain p-2 sm:p-4"
            priority={true}
          />
        </div>
      </div>
      <div className="">
        <div className="mt-4 text-center">
          Please{" "}
          <Link href={`${LOGIN_ROUTE}`} className="text-blue-500">
            {" "}
            Log In
          </Link>{" "}
          to continue.
        </div>
      </div>
    </main>
  );
}
