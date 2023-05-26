"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Typed from "typed.js";
import ElecRegisStudent from "../../public/images/elec_regis_student.jpg";
import ElecRegisStudent2 from "../../public/images/elec_regis_student2.jpg";

export default function Home() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["มีงานทำแน่นอน", "ทำงานตรงสาย", "อาชีพในอนาคต"],
      typeSpeed: 150,
      backSpeed: 100,
      backDelay: 1000,
      loop: true,
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="body relative bg-contain h-screen w-full flex border-b-4 border-blue-500">
        <Image
          className="absolute object-cover"
          src="/images/elec_banner1.jpg"
          alt="elec_banner1"
          fill
        />
        <div className="h-full w-full absolute bg-black bg-opacity-50"></div>
        <div className="h-full max-w-7xl w-full m-auto flex flex-col justify-center items-center lg:items-start z-10">
          <div className="flex flex-col text-white ">
            {/* <div className="flex gap-12 ">
              <Image
                src="/images/cmtc_logo.png"
                alt="cmtc_logo"
                height={150}
                width={150}
              />
              <Image
                src="/images/elec_logo.svg"
                alt="elec_logo"
                height={150}
                width={150}
              />
            </div>
            <br /> */}
            <div className="text-4xl lg:text-6xl">
              <h1 className="mb-0">เริ่มต้นเรียนกับเรา</h1>
              <div className="flex">
                <span ref={el}></span>
                <span>&nbsp;</span>
              </div>
            </div>
            <p className="text-base lg:text-2xl">
              ที่ แผนกอิเล็กทรอนิกส์ วิทยาลัยเทคนิคเชียงใหม่
            </p>
            <br />
            <Link
              className="self-center lg:self-start px-4 py-3 mr-12 rounded-2xl text-blue-500 bg-white hover:bg-gray-100 transition-colors"
              href="https://e-regis.cmtc.ac.th/"
              target="_blank"
            >
              เพิ่มเติม
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full flex flex-col m-auto">
        <h1 className="text-4xl text-left mt-12">ข่าวสารจากทางแผนก</h1>
        <Image
          className="pt-12"
          src={ElecRegisStudent2}
          alt="elec_regis_student2"
        />
        <Image
          className="pt-12"
          src={ElecRegisStudent}
          alt="elec_regis_student"
        />
      </div>

      <div className=" max-w-7xl m-auto flex flex-col justify-center items-center ">
        <h1 className="text-4xl text-left my-12">ประชาสัมพันธ์</h1>
        <div className="grid grid-rows-3 lg:grid-rows-none lg:grid-cols-3 gap-4 m-auto px-4">
          <div className="bg-gray-400">
            <div className="relative h-[300px]">
              <Image
                className="object-cover"
                src="/images/elec_logo.svg"
                alt="elec_logo"
                fill
              />
            </div>
            <div className="flex flex-col p-4 text-xl bg-white shadow-lg">
              <h4 className="line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                incidunt rerum praesentium ad commodi alias dolores consequatur
              </h4>
              <br />
              <button className="bg-blue-500 hover:bg-blue-400 p-2 rounded-xl">
                <Link className="self-end text-white" href="#">
                  ดูเพื่มเติม
                </Link>
              </button>
            </div>
          </div>
          <div className="bg-gray-400">
            <div className="relative h-[300px]">
              <Image
                className="object-cover"
                src="/images/elec_logo.svg"
                alt="elec_logo"
                fill
              />
            </div>
            <div className="flex flex-col p-4 text-xl bg-white shadow-lg">
              <h4 className="line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                incidunt rerum praesentium ad commodi alias dolores consequatur
              </h4>
              <br />
              <button className="bg-blue-500 hover:bg-blue-400 p-2 rounded-xl">
                <Link className="self-end text-white" href="#">
                  ดูเพื่มเติม
                </Link>
              </button>
            </div>
          </div>
          <div className="bg-gray-400">
            <div className="relative h-[300px]">
              <Image
                className="object-cover"
                src="/images/elec_logo.svg"
                alt="elec_logo"
                fill
              />
            </div>
            <div className="flex flex-col p-4 text-xl bg-white shadow-lg">
              <h4 className="line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                incidunt rerum praesentium ad commodi alias dolores consequatur
              </h4>
              <br />
              <button className="bg-blue-500 hover:bg-blue-400 p-2 rounded-xl">
                <Link className="self-end text-white" href="#">
                  ดูเพื่มเติม
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full flex my-8 p-8 justify-center items-end ">
          <button className="bg-blue-500 hover:bg-blue-400 py-2 px-8 rounded-full">
            <Link className="text-white" href="/blog">
              เพื่มเติม
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
