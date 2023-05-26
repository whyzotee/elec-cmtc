import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl m-auto pb-12 divide-y-4 divide-[#303030]">
        <div className="grid grid-rows-3 ml-4 sm:ml-8 md:ml-12 lg:grid-rows-none lg:grid-cols-3 pb-4">
          <div>
            <h1 className="text-xl">
              แผนกอิเล็กทรอนิกส์ วิทยาลัยเทคนิคเชียงใหม่
            </h1>
            <div className="text-base">
              <p>9 ถ.เวียงแก้ว ต.ศรีภูมิ อ.เมือง จ.เชียงใหม่ 50200</p>
              <p>โทร: 053217708</p>
            </div>
            <div className="flex gap-4 py-2">
              <a href="https://web.facebook.com/electronicscmtc">
                <button className="h-8 w-8 bg-[url(/images/social_logo/facebook_logo.svg)] bg-cover bg-no-repeat rounded-full"></button>
              </a>
              <a href="#">
                <button className="h-8 w-8 bg-[url(/images/social_logo/line_logo.svg)] bg-cover bg-no-repeat rounded-full"></button>
              </a>
              <a href="#">
                <button className="h-8 w-8 bg-[url(/images/social_logo/youtube_logo.svg)] bg-cover bg-no-repeat rounded-full"></button>
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:items-center">
            <h1 className="self-start lg:pl-12 text-xl">บริการ</h1>
            <ul className="list-disc pl-12 lg:pl-0">
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

          <div className="flex flex-col">
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
        <div className="flex justify-between">
          <p>
            this website make by{" "}
            <Link
              className="text-[#ffd1a8] hover:text-[#FFDAB9] transition-colors"
              href="https://whyzotee.vercel.app"
              target="_blank"
            >
              whyzotee
            </Link>
          </p>
          <p>Copyright © 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
