import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  TwitterOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export function LaunchHero() {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen relative bg-[#191b1f]">
      {/* Consider replacing this image with something relevant to brain tumor prediction */}
      <Image
        src="/background.svg"
        alt="Background Image"
        fill
        style={{ objectFit: "cover" }}
        className="z-20"
      />
      <div className="flex flex-col md:w-3/5 gap-8 md:gap-6 z-30 absolute bottom-[188px] md:bottom-14 mx-auto px-2 md:px-20">
        <p className="font-poppins font-medium text-3xl md:text-6xl text-wrap text-white">
          Brain Tumor
          <span className="font-black fond-poppins text-3xl md:text-6xl ml-3 md:ml-5">
            Prediction
          </span>
        </p>
        <p className="font-poppins font-light text-2xl text-wrap text-white">
          {/* Update this text with a concise and informative description */}
          Early detection and accurate prediction of brain tumors using advanced AI. 
        </p>
        <button
          //onClick={() => navigate("/launch")}
          className="flex lg:hidden w-32 px-4 py-3 rounded-lg text-[#FFFFFF] launch-button hover:opacity-80 z-10 shadow-lg"
        >
          Launch App
        </button>
        <span className="flex gap-6 text-white text-3xl">
          {/* Update these links to your actual social media pages */}
          <Image src={'/brain.png'} width={40} height={20} alt="brain"
            //onClick={() => navigate("https://twitter.com/your_twitter")}
            className="hover:opacity-60 cursor-pointer"
          />
          <Image src={'/brain1.png'} width={40} height={20} alt="brain"
            //onClick={() => navigate("https://twitter.com/your_twitter")}
            className="hover:opacity-60 cursor-pointer"
          />
          <Image src={'/cancer.png'} width={40} height={20} alt="brain"
            //onClick={() => navigate("https://twitter.com/your_twitter")}
            className="hover:opacity-60 cursor-pointer"
          />
        </span>
      </div>
    </div>
  );
}