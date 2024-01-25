"use client";
import Image from "next/image";
import QRCode from "qrcode.react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { basePath } from "@/lib/setting";

export default function StreamPage() {
  const [allImage, setAllImage] = useState<BlogType[]>([]);
  const [bannerIndex, setbannerIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(-1); // 0 fade, -1 left -> right, 1 right -> left

  var delayForNext = 10000; // milisec
  let animationDuration: number = 1; // sec

  const fetchData = async () => {
    const res = await fetch(`${basePath}/api/get-no-public-data.php`);

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setbannerIndex((prevIndex) => (prevIndex + 1) % allImage.length);
    }, delayForNext);

    if (isLoading) {
      fetchData().then((element: BlogType[] | undefined) => {
        if (element) setAllImage(element);
        setLoading(false);
      });
    }

    return () => clearInterval(interval);
  }, [isLoading]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="h-screen w-full flex flex-col">
      <div className="relative flex items-center px-4 py-12">
        <div className="title w-[95%] border-[2.5px] border-black rounded-md bg-[#2FA8FF] p-6 text-6xl text-white">
          <AnimatePresence initial={false} mode="wait">
            <motion.span
              key={bannerIndex}
              className="line-clamp-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: animationDuration }}
            >
              {allImage[bannerIndex].topic}
            </motion.span>
          </AnimatePresence>
        </div>
        <Image
          src="/images/elec_logo.svg"
          alt="elec_logo"
          height={200}
          width={200}
          className="absolute right-2"
        />
      </div>
      <div className="min-h-[32vh] relative flex justify-center items-center overflow-hidden m-4">
        <AnimatePresence initial={false}>
          <motion.img
            className="absolute h-full w-full object-center object-cover border-[2.5px] border-black rounded-md"
            key={bannerIndex}
            src={allImage[bannerIndex].img_path}
            initial={{ x: animation > 0 ? 1000 : -1000, opacity: 0 }}
            animate={{ zIndex: 1, x: 0, opacity: 1 }}
            exit={{
              zIndex: 0,
              x: animation < 0 ? 1000 : -1000,
              opacity: 0,
            }}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          ></motion.img>
        </AnimatePresence>
      </div>
      <div className="relative border-[2.5px] max-h-full h-full border-black rounded-md p-6 mt-12 m-4 text-5xl">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={bannerIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: animationDuration,
            }}
            className="line-clamp-[7]"
          >
            ประกาศ: {allImage[bannerIndex].description}{" "}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="flex justify-between w-full items-end">
        <div className="h-fit w-fit text-center border-[2.5px] border-black rounded-md p-2 flex flex-col items-center m-4">
          <span className="text-3xl">สแกนเพื่อดูเพิ่มเติม</span>
          <QRCode
            value={allImage[bannerIndex].social_link ?? ""}
            className="rounded-md mt-2"
            size={250}
          />
        </div>
        <Image src="/images/anya.png" alt="anya" height={300} width={300} />

        <div className="h-fit w-fit text-center border-[2.5px] border-black rounded-md p-2 flex flex-col items-center m-4">
          <span className="text-3xl">สแกนเพื่อช่วยให้รุ่นพี่จบ</span>
          <Image src="/images/meme.jpg" alt="anya" height={300} width={300} />
          <QRCode
            value={"https://forms.gle/rC5G4ttAu39P85iT7"}
            className="rounded-md mt-2"
            size={250}
          />
        </div>
      </div>
    </main>
  );
}
