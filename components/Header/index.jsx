"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AuthDetail from "../AuthDetail";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { auth } from "@/fibase";
import { toast } from "react-toastify";
import { useUser } from "@/utils/auth";
import { CiLogin, CiLogout } from "react-icons/ci";
import { MdLogin, MdLogout } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const user = useUser();
  const menuHandler = () => {
    setIsOpen((current) => !current);
  };

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        // code for redirect user to Log-in page
        toast("Sign out Successful");
        deleteCookie("accessToken");
        router.push("/login");
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <header className="shadow header sticky top-0 z-40  bg-white">
      <nav className="sticky top-0 flex  h-[100px] items-center justify-between p-4 lg:container ">
        <div className="">
          <Link href="/protected/all">
            <Image
              src="/android-chrome-512x512.png"
              alt="login image"
              className="ml-2"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>
        <div className="hidden items-center gap-12  md:flex">
          {/* <Link href="/">
            <div className="cursor-pointer text-base font-semibold tracking-[0.5px] text-[#020066]">
              Home
            </div>
          </Link> */}
          <div className="flex cursor-pointer items-center gap-2">
            <Link href="/protected/all">
              <div className="text-base font-semibold tracking-[0.5px] text-[#020066]">
                Dashboard
              </div>
            </Link>
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Link href="/protected/new">
              <div className="text-base font-semibold tracking-[0.5px] text-[#020066]">
                Create new task
              </div>
            </Link>
          </div>
          {user ? (
            <button onClick={signOutHandler}>
              <div className="hover::-translate-y-1 cursor-pointer text-base font-semibold tracking-[0.5px] text-[#020066]">
                Logout
                <MdLogout className="inline ml-1 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:lefinline t-40 text-red-600 font-bold" />
              </div>
            </button>
          ) : (
            <Link href="/login">
              <div className="hover::-translate-y-1 cursor-pointer text-base font-semibold tracking-[0.5px] text-[#020066]">
                Login
                <MdLogin className="inline ml-1 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:lefinline t-40 text-green-600 font-bold" />
              </div>
            </Link>
          )}
        </div>
        <div className=" block md:hidden">
          {isOpen ? (
            <div className="absolute right-0 top-0 z-[9999] flex h-[100vh] w-full origin-top-right transform justify-end bg-black/40 transition ">
              <div className="w-2/3 bg-white p-5 text-sm tracking-[0.5px]">
                <div
                  className="absolute right-4 top-[38px]"
                  onClick={menuHandler}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.8"
                      d="M4 4L20 20"
                      stroke="url(#paint0_linear_809_7302)"
                      stroke-width="3"
                      stroke-linecap="square"
                    />
                    <path
                      opacity="0.8"
                      d="M4 20L20 4"
                      stroke="url(#paint1_linear_809_7302)"
                      stroke-width="3"
                      stroke-linecap="square"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_809_7302"
                        x1="4.35446"
                        y1="3.64554"
                        x2="20.3545"
                        y2="19.6455"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0500FF" />
                        <stop offset="1" stop-color="#8A47F3" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_809_7302"
                        x1="3.64554"
                        y1="19.6455"
                        x2="19.6455"
                        y2="3.64554"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#0500FF" />
                        <stop offset="1" stop-color="#8A47F3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <ul className="mt-20 flex flex-col gap-5">
                  {/* <li className="my-2  px-2 py-1">
                    <Link href="/" onClick={menuHandler}>
                      <div className="cursor-pointer  font-semibold tracking-[0.5px] text-[#020066]">
                        Home
                      </div>
                    </Link>
                  </li> */}
                  <li className="my-2  px-2 py-1">
                    <Link href="/protected/all" onClick={menuHandler}>
                      <div className="cursor-pointer  font-semibold tracking-[0.5px] text-[#020066]">
                        Dashboard
                      </div>
                    </Link>
                  </li>
                  <li className="my-2  px-2 py-1">
                    <Link href="/protected/new" onClick={menuHandler}>
                      <div className=" font-semibold tracking-[0.5px] text-[#020066]">
                        Create New task
                      </div>
                    </Link>
                  </li>
                  {user ? (
                    <li className="my-2  px-2 py-1" onClick={menuHandler}>
                      <button onClick={signOutHandler}>
                        <div className="hover::-translate-y-1 cursor-pointer  font-semibold tracking-[0.5px] text-[#020066]">
                          Logout
                          <MdLogout className="inline ml-2 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:lefinline t-40 text-red-600 font-bold" />
                        </div>
                      </button>
                    </li>
                  ) : (
                    <li className="my-2  px-2 py-1" onClick={menuHandler}>
                      <Link href="/login">
                        <div className="hover::-translate-y-1 cursor-pointer  font-semibold tracking-[0.5px] text-[#020066]">
                          Login
                          <MdLogin className="inline ml-2 h-[15px] w-[15px] object-contain md:h-[20px] md:w-[20px] 2xl:lefinline t-40 text-green-600 font-bold" />
                        </div>
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ) : (
            <div className="">
              <div className="" onClick={menuHandler}>
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block  transition-all duration-300 group-open:rotate-90"
                >
                  <g clipPath="url(#clip0_1455_269)">
                    <path
                      opacity="0.8"
                      d="M1.12524 8H23.1252"
                      stroke="url(#paint0_linear_1455_269)"
                      stroke-width="3"
                      stroke-linecap="square"
                    />
                    <path
                      opacity="0.8"
                      d="M1.12524 17H23.1252"
                      stroke="url(#paint1_linear_1455_269)"
                      stroke-width="3"
                      stroke-linecap="square"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1455_269"
                      x1="1.12524"
                      y1="7.49872"
                      x2="23.1252"
                      y2="7.49872"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0500FF" />
                      <stop offset="1" stop-color="#8A47F3" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_1455_269"
                      x1="1.12524"
                      y1="16.4987"
                      x2="23.1252"
                      y2="16.4987"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#0500FF" />
                      <stop offset="1" stop-color="#8A47F3" />
                    </linearGradient>
                    <clipPath id="clip0_1455_269">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.125244)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
