"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import ElecRegisStudent from "../../public/images/elec_regis_student.jpg";
import CmtcRegisStudent from "../../public/images/elec_regis_student2.jpg";
import CmtcRegisStudent2 from "../../public/images/elec_regis_student3.jpg";

import { motion } from "framer-motion";
import { basePath } from "@/lib/setting";

const getBlogData = async () => {
  const res = await fetch(`${basePath}/api/get-home-page.php`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [blogData, setBlogData] = useState<any>(null);
  const el = useRef(null);

  useEffect(() => {
    getBlogData()
      .then((res) => {
        setBlogData(res);
        setIsLoading(false);
      })
      .catch((error) => setIsLoading(false));

    new Typed(el.current, {
      strings: ["มีงานทำแน่นอน", "ทำงานตรงสาย", "อาชีพในอนาคต"],
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between overflow-x-hidden">
      <div className="body relative bg-contain h-screen w-full flex border-b-4 border-blue-500">
        <Image
          className="absolute object-cover"
          src="/images/elec_banner1.jpg"
          alt="elec_banner1"
          fill
        />
        <div className="h-full w-full absolute bg-black bg-opacity-50"></div>
        <div className="h-full max-w-7xl w-full m-auto lg:my-0 flex flex-col lg:flex-row justify-center lg:justify-start items-center z-10">
          <div className="lg:w-1/2 flex flex-col text-white ">
            <div className="text-4xl lg:text-6xl">
              <motion.h1
                initial={{ translateX: -100, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                เริ่มต้นเรียนกับเรา
              </motion.h1>
              <div className="flex">
                <span ref={el}></span>
                <span>&nbsp;</span>
              </div>
            </div>
            <motion.h1
              initial={{ translateX: 100, opacity: 0 }}
              animate={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-base lg:text-2xl"
            >
              ที่ แผนกอิเล็กทรอนิกส์ วิทยาลัยเทคนิคเชียงใหม่
            </motion.h1>

            <br />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                className="w-fit mx-auto lg:mx-0 px-3 py-2 rounded-lg text-white border-2 border-white hover:bg-white hover:text-blue-500 transition-colors"
                href="https://e-regis.cmtc.ac.th/"
                target="_blank"
              >
                ลงเบียนเรียน
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full flex flex-col m-auto">
        <motion.h1
          initial={{ translateX: -100, opacity: 0 }}
          whileInView={{ translateX: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center lg:text-left text-4xl mt-12 text-[#303030]"
        >
          ประกาศจากทางวิทยาลัย
        </motion.h1>
        <div className="flex gap-4 mt-12 px-4">
          <Link href="#" className="w-1/2 hover:scale-105 transition-all">
            <Image
              src={ElecRegisStudent}
              alt="elec_regis_student"
              className="h-full object-cover rounded-xl"
            />
          </Link>
          <div className="flex w-1/2 flex-col justify-between">
            <Link href="#" className="hover:scale-105 transition-all">
              <Image
                src={CmtcRegisStudent2}
                alt="elec_regis_student2"
                className="rounded-xl"
              />
            </Link>
            <Link href="#" className="hover:scale-105 transition-all">
              <Image
                src={CmtcRegisStudent}
                alt="elec_regis_student2"
                className="rounded-xl"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full m-auto flex flex-col justify-center items-center pb-12 text-[#303030]">
        <h1 className="text-4xl text-left my-12">ประชาสัมพันธ์</h1>
        <div className="w-full grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-4 m-auto px-4">
          {isLoading ? (
            [1, 2, 3].map((element) => (
              <div key={element}>
                <div className="animate-pulse shadow-xl rounded-xl bg-white transition-all">
                  <div className="relative h-56 bg-gray-200">
                    <span className="absolute right-0 bg-white p-1 w-24 h-6 rounded-md m-2"></span>
                  </div>
                  <div className="w-full flex flex-col p-4 gap-4">
                    <div className="h-6 w-1/2 bg-gray-200  rounded-lg"></div>
                    <div className="h-4 bg-gray-200 rounded-lg col-span-2"></div>
                    <div className="h-4 bg-gray-200 rounded-lg col-span-2"></div>
                    <div className="h-10 bg-gray-200 rounded-lg col-span-2"></div>
                  </div>
                </div>
              </div>
            ))
          ) : blogData == null ? (
            <>
              <br />
              <span className="flex justify-center items-center h-48">
                Error: can&apos;t fetch data from backend
              </span>
              <br />
            </>
          ) : (
            blogData.map((element: BlogType) => (
              <div key={element.id}>
                <div className="shadow-xl rounded-xl bg-white hover:scale-105 transition-all">
                  <div className="relative h-56">
                    <Image
                      className="absolute object-cover rounded-t-xl"
                      src={element.img_path}
                      alt={element.img_path}
                      fill
                    />
                    <span className="absolute right-0 bg-white p-1 rounded-md m-2">
                      {new Date(element.date).toLocaleDateString("th-TH")}
                    </span>
                  </div>
                  <div className=" flex flex-col p-4">
                    <h1 className="line-clamp-1 text-xl font-semibold">
                      {element.topic}
                    </h1>
                    <p className="h-[4.5rem] w-full line-clamp-3 my-4">
                      {element.description}
                    </p>
                    <Link
                      href={"/blog/?id=" + element.id}
                      className="text-center text-blue-500 border-2 border-blue-500 px-3 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-colors"
                    >
                      อ่านต่อ
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  );
}
