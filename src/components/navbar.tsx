import Image from "next/image";
import DialogPage from "@/components/dialog_page";
import { Button, Dropdown } from "@nextui-org/react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-4 flex justify-center text-[#303030] bg-white border-b-8 border-[#0c66fa] z-50">
      <div className="max-w-7xl w-full flex gap-4 items-center justify-between ">
        <a href="#">
          <Image
            className="rounded-2xl border-4 border-orange-300"
            src="/elec_banner.jpg"
            alt="elec_banner"
            height={100}
            width={200}
          />
        </a>
        <ul className="flex gap-4 text-[#020202]">
          <li>
            <Button color="primary" auto>
              <a href="#">หน้าหลัก</a>
            </Button>
          </li>
          <li>
            <Button color="primary" auto flat>
              <a className="text-[#303030]" href="#">
                เกี่ยวกับเรา
              </a>
            </Button>
          </li>
          <li>
            <Dropdown>
              <Dropdown.Button flat>
                {" "}
                <button className="text-[#303030]">หลักสูตร </button>{" "}
              </Dropdown.Button>
              <Dropdown.Menu
                disabledKeys={["edit"]}
                aria-label="Static Actions"
              >
                <Dropdown.Item
                  key="new"
                  description="ระดับประกาศนียบัตรวิชาชีพ"
                >
                  ปวช.
                </Dropdown.Item>
                <Dropdown.Item
                  key="copy"
                  description="ระดับประกาศนียบัตรวิชาชีพชั้นสูง"
                >
                  ปวส.
                </Dropdown.Item>
                <Dropdown.Item key="edit" description="ระดับปริญญาตรี">
                  ป.ตรี
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li>
            <Button color="primary" auto flat>
              <a className="text-[#303030]" href="#">
                ติดต่อเรา
              </a>
            </Button>
          </li>
          <li>
            <DialogPage />
          </li>
        </ul>
      </div>
    </nav>
  );
}
