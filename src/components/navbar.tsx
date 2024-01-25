"use client";
import Link from "next/link";
import Image from "next/image";
import { getCookie } from "cookies-next";
import { usePathname } from "next/navigation";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { ChevronDownIcon, Bars3Icon } from "@heroicons/react/20/solid";

const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState<any>(null);

  const activeBtn = "bg-blue-500 hover:bg-blue-700 text-white ";
  const unActiveBtn =
    "bg-blue-100 text-[#505050] hover:bg-blue-500 hover:text-white ";

  const btnCSS =
    "inline-flex justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-colors";

  useEffect(() => {
    setIsLogin(getCookie("key") != undefined);
  }, [path]);

  if (path.startsWith("/stream")) return null;

  return (
    <div className="sticky top-0 w-full p-2 flex flex-col justify-center items-center text-[#303030] bg-white border-b-8 border-[#0c66fa] z-50">
      <div className="max-w-7xl w-full flex gap-4 items-center justify-between">
        <Link className="relative h-14 w-48" href="/">
          <Image
            className="rounded-2xl border-orange-300"
            src="/images/elec_banner.jpg"
            alt="elec_banner"
            fill
          />
        </Link>
        <div className="hidden gap-4 md:flex">
          <Link href="/">
            <button
              type="button"
              className={`${path == "/" ? activeBtn : unActiveBtn} ${btnCSS} `}
            >
              หน้าหลัก
            </button>
          </Link>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={`${
                  path.includes("/about") ? activeBtn : unActiveBtn
                } ${btnCSS} `}
              >
                เกี่ยวกับเรา
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-5 w-5 "
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/about/history">
                        <button
                          className={`${
                            active ? "bg-blue-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <h1 className="text-base">ประวัติของเรา</h1>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/about/contact">
                        <button
                          className={`${
                            active ? "bg-blue-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <h1 className="text-base">ติดต่อเรา</h1>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button
                className={`${
                  path.includes("/course") ? activeBtn : unActiveBtn
                } ${btnCSS} `}
              >
                หลักสูตร
                <ChevronDownIcon
                  className="ml-2 -mr-1 h-5 w-5 "
                  aria-hidden="true"
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="px-1 py-1 ">
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/course/voc_cert">
                        <button
                          className={`${
                            active ? "bg-blue-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <div className="text-left">
                            <h1 className="font-bold">ปวช.</h1>
                            <p>ระดับประกาศนียบัตรวิชาชีพ</p>
                          </div>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="/course/dip_voc_cert">
                        <button
                          className={`${
                            active ? "bg-blue-500 text-white" : "text-gray-900"
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <div className="text-left">
                            <h1 className="font-bold">ปวส.</h1>
                            <p>ระดับประกาศนียบัตรวิชาชีพชั้นสูง</p>
                          </div>
                        </button>
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item disabled>
                    {({ active }) => (
                      <button
                        className={`${
                          active ? "bg-blue-500 text-white" : "text-gray-900"
                        } text-opacity-60 group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <div className="text-left ">
                          <h1 className="font-bold">ป.ตรี</h1>
                          <p>ระดับปริญาตรี</p>
                        </div>
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          <Link href="/blog">
            <button
              className={`${
                path.includes("blog") ? activeBtn : unActiveBtn
              } ${btnCSS} `}
            >
              ข่าวสาร
            </button>
          </Link>
          {isLogin == null ? (
            <button className={`${unActiveBtn} ${btnCSS} w-24`}></button>
          ) : !isLogin ? (
            <Link href="/login">
              <button
                className={`${
                  path.includes("login") ? activeBtn : unActiveBtn
                } ${btnCSS} w-24`}
              >
                เข้าสู่ระบบ
              </button>
            </Link>
          ) : (
            <a href="/dashboard" className={`${unActiveBtn} ${btnCSS} w-24`}>
              Dashboard
            </a>
          )}
        </div>
        <div className="flex flex-col md:hidden">
          <button className=" mr-4" onClick={() => setIsOpen(!isOpen)}>
            <Bars3Icon className=" h-5 w-5" />
          </button>
        </div>
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } md:hidden w-full flex-col space-y-2 text-center mt-4`}
      >
        <Link
          className="bg-blue-500 p-2 rounded-xl text-white h-full w-full"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          หน้าหลัก
        </Link>
        <Link
          className="bg-blue-500 p-2 rounded-xl text-white h-full w-full"
          href="/about/history"
          onClick={() => setIsOpen(false)}
        >
          เกี่ยวกับเรา
        </Link>
        <Link
          className="bg-blue-500 p-2 rounded-xl text-white h-full w-full"
          href="/course/voc_cert"
          onClick={() => setIsOpen(false)}
        >
          หลักสูตร
        </Link>
        <Link
          className="bg-blue-500 p-2 rounded-xl text-white h-full w-full"
          href="/about/contact"
          onClick={() => setIsOpen(false)}
        >
          ติดต่อเรา
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
