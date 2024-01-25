"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();

  if (path.startsWith("/stream")) return null;
  return (
    <footer>
      <div className="max-w-7xl m-auto pb-12">
        <div className="flex flex-col lg:flex-row justify-between ml-4 sm:ml-8 md:ml-12">
          <div className="lg:w-1/3">
            <h1 className="text-xl">
              แผนกอิเล็กทรอนิกส์ วิทยาลัยเทคนิคเชียงใหม่
            </h1>
            <div className="text-base">
              <p>9 ถ.เวียงแก้ว ต.ศรีภูมิ อ.เมือง จ.เชียงใหม่ 50200</p>
              <p>โทร: 053217708</p>
            </div>
            <div className="flex gap-4 py-2">
              <Link
                href="https://web.facebook.com/electronicscmtc"
                target="_blank"
              >
                <button className="h-8 w-8 bg-[url(/images/social_logo/facebook_logo.svg)] bg-cover bg-no-repeat rounded-full"></button>
              </Link>
              <Link href="#" target="_blank">
                <button className="h-8 w-8 bg-[url(/images/social_logo/line_logo.svg)] bg-cover bg-no-repeat rounded-full"></button>
              </Link>
              <Link href="#" target="_blank">
                <button className="h-8 w-8 bg-[url(/images/social_logo/youtube_logo.svg)] bg-cover bg-no-repeat rounded-full"></button>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/3 flex flex-col">
            <h1 className="self-start text-xl">บริการ</h1>
            <ul className="list-disc pl-12">
              <li>
                <Link
                  href="https://student.vec.go.th/web/Login.htm?mode=indexStudent"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  ตรวจสอบผลการเรียน
                </Link>
              </li>
              <li>
                <Link
                  href="https://e-regis.cmtc.ac.th/"
                  target="_blank"
                  className="hover:text-blue-400"
                >
                  ระบบลงทะเบียนนักเรียน นักศึกษา
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:w-1/3 flex flex-col">
            <h1 className=" text-xl">สาขางานระดับ ปวช.</h1>
            <ul className="list-disc pl-12">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  อิเล็กทรอนิกส์
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  เทคนิคคอมพิวเตอร์
                </Link>
              </li>
            </ul>
            <h1 className=" text-xl">สาขางานระดับ ปวส.</h1>
            <ul className="list-disc pl-12">
              <li>
                <Link href="#" className="hover:text-blue-400">
                  อิเล็กทรอนิกส์อุสาหกรรม
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  คอมพิวเตอร์ระบบเครือข่าย
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400">
                  อิเล็กทรอนิกส์การแพทย์
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 mx-auto bg-blue-500 text-white py-2 px-4 w-fit rounded-lg ">
          <Link href="https://whyzotee.vercel.app" target="_blank">
            Electronic CMTC,
            <span> © 2023 All Rights Reserved.</span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
