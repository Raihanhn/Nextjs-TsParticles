import Image from "next/image";
import Particletsbg from "./components/Particletsbg";
import Link from "next/link";
import Lightparticle from "./components/Lightparticle";

export default function Home() {
  return (
    <div className="">
      <Lightparticle />
      <div className=" grid place-items-center mt-10 ">
        <Link href="/face">
          <button className=" bg-green-500 ">
            Hello click for visit color particles{" "}
          </button>
        </Link>
        <Link href="/face2">
          <button className=" bg-orange-500 mt-5  ">
            Tiger click for Fireworks{" "}
          </button>
        </Link>
        <Link href="/face3">
          <button className=" bg-orange-500 mt-5  ">Tiger click for div</button>
        </Link>
      </div>
    </div>
  );
}
