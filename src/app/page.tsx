"use client";
import Navbar from "@/components/navbar";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="body relative bg-contain h-screen w-full flex mt-10 border-b-4 border-blue-500">
        <Image
          className="absolute object-cover"
          src="/elec_banner1.jpg"
          alt="elec_banner1"
          fill
        />
        <div className="h-full w-full absolute bg-black bg-opacity-50"></div>
        <div className="h-full w-1/2 flex flex-col justify-center items-center z-10">
          <div className="flex gap-12">
            <Image
              src="/cmtc_logo.png"
              alt="cmtc_logo"
              height={150}
              width={150}
            />
            <Image
              src="/elec_logo.svg"
              alt="elec_logo"
              height={150}
              width={150}
            />
          </div>
          <br />
          <div className="flex flex-col text-white ">
            <div className="text-6xl">
              <h1>เริ่มต้นเรียนกับเรา</h1>
              <h1>มีงานทำแน่ๆ(หรือเปล่า?)</h1>
            </div>
            <p className="text-xl">
              ที่ แผนกอิเล็กทรอนิกส์ วิทยาลัยเทคนิคเชียงใหม่
            </p>
            <br />
            <a
              className="self-start p-4 mr-12 rounded-full text-white bg-[#0c66fa]"
              href="#"
            >
              เพิ่มเติม
            </a>
          </div>
        </div>
      </div>
      <div className="h-screen container m-auto p-8 ">
        <h1 className="text-5xl text-left">ประชาสัมพันธ์</h1>
        <br />
        <div className=" grid grid-cols-3 gap-4 m-auto">
          <div className="bg-black">
            <div className="relative h-[500px]">
              <Image
                className="object-cover"
                src="/elec_logo.svg"
                alt="elec_logo"
                fill
              />
            </div>
            <div className="flex flex-col p-4 text-xl bg-white shadow-lg">
              <h1 className="line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                incidunt rerum praesentium ad commodi alias dolores consequatur
              </h1>
              <br />
              <Button auto>
                <a className="self-end" href="">
                  ดูเพื่มเติม
                </a>
              </Button>
            </div>
          </div>
          <div className="bg-black">
            <div className="relative h-[500px]">
              <Image
                className="object-cover"
                src="/elec_logo.svg"
                alt="elec_logo"
                fill
              />
            </div>
            <div className="flex flex-col p-4 text-xl bg-white shadow-lg">
              <h1 className="line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                incidunt rerum praesentium ad commodi alias dolores consequatur
              </h1>
              <br />
              <Button auto>
                <a className="self-end" href="">
                  ดูเพื่มเติม
                </a>
              </Button>
            </div>
          </div>
          <div className="bg-black">
            <div className="relative h-[500px]">
              <Image
                className="object-cover"
                src="/elec_logo.svg"
                alt="elec_logo"
                fill
              />
            </div>
            <div className="flex flex-col p-4 text-xl bg-white shadow-lg">
              <h1 className="line-clamp-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                incidunt rerum praesentium ad commodi alias dolores consequatur
              </h1>
              <br />
              <Button auto>
                <a className="self-end" href="">
                  ดูเพื่มเติม
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
