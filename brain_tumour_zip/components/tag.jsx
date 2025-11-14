import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";

export function LaunchTag() {
  const Tags = (value, key) => {
    return (
      <div className="flex flex-col gap-4 justify-center items-center">
        <p className="text-white font-sans font-black text-5xl">{value}</p>
        <p className="text-white font-poppins text-md font-medium">{key}</p>
      </div>
    );
  };

  return (
    <>
      <div className="hidden md:grid w-full mx-auto xl:grid-cols-4 z-30 px-48 pt-14">
        {/* Replace with relevant metrics */}
        {Tags("98%", "Accuracy")} 
        {Tags("10,000+", "Scans Analyzed")}
        {Tags("5+", "Supported Modalities")} 
        {Tags("10+", "Leading Hospitals")} 
      </div>
      <div className="grid lg:grid-cols-2 gap-10 md:gap-6 px-2 md:px-20 pt-16 md:pt-36">
        <div className="grid gap-2 justify-start xl:w-3/5 text-wrap">
          <a
            className="flex text-white mb-4 font-poppins cursor-pointer z-30 hover:text-opacity-60 text-2xl font-medium"
            href="/about" // Changed to /about
          >
            About the Project{" "} 
            <ArrowRightOutlined className="ml-1 text-base pt-[2px]" />
          </a>
          <p className="text-white mb-3 font-semibold text-3xl font-poppins">
            {/* Update with a compelling headline */}
            Revolutionizing Brain Tumor Detection 
          </p>
          <p className="font-poppins text-[#888D9B] text-xl font-medium text-opacity-80">
            {/* Update with relevant description */}
            Our AI-powered platform provides fast, accurate, and accessible 
            brain tumor prediction to improve patient outcomes.
          </p>
        </div>
        <div className="md:flex lg:justify-end">
          <div className="border-white md:w-5/6 h-[290px] md:h-[264px] rounded-xl z-30 relative bg-center px-4 md:px-3">
            {/* Replace with relevant image */}
            <Image
              src={"/x-ray.jpg"} 
              fill
              alt="Brain Scan" 
              style={{ overflow: "hidden", objectFit: "cover" }}
              className="absolute rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function LaunchingTagTwo() {
  const router = useRouter();
  return (
    <div className="grid lg:grid-cols-3 gap-10 lg:gap-2 px-2 md:px-20 mt-28 md:mt-32">
      <div className="md:col-span-2 rounded-xl z-30 bg-center px-2 border-white h-[353px] md:h-[420px]">
        <a
          className="flex text-white font-poppins cursor-pointer z-30 hover:text-opacity-60 text-2xl font-medium pb-6"
          href="/technology" // Changed to /technology
        >
          Technology <ArrowRightOutlined className="ml-1 text-base pt-[2px]" />
        </a>
        <div className="w-full h-full relative">
          {/* Replace with relevant image */}
          <Image
            src={"/apps.png"} 
            alt="AI Visualization"
            fill
            style={{ overflow: "hidden", objectFit: "cover" }}
            className="absolute rounded-2xl"
          />
          <div className="absolute md:bottom-4 md:left-8 px-3 md:px-0 grid gap-4 md:w-3/4 justify-start">
            <p className="text-white text-3xl font-poppins font-medium">
              {/* Update with relevant headline */}
              Advanced AI for Accurate Predictions
            </p>
            <p className="font-poppins text-[#888D9B] text-xl font-medium text-opacity-90 md:text-opacity-80">
              {/* Update with relevant description */}
              Our platform utilizes cutting-edge machine learning algorithms and 
              deep learning models to analyze medical images and provide 
              reliable predictions.
            </p>
            <button
              onClick={() => router.push("/technology")} 
              className="bg-[#FFFFFF1A] hover:bg-opacity-60 hover:text-opacity-60 font-medium px-1 py-2 rounded-xl text-white font-poppins xl:w-1/4"
            >
              Learn More ↗ 
            </button>
          </div>
        </div>
      </div>
      <div className="px-3 md:px-4 mt-14 h-full grid justify-start items-start py-2 bg-[#FFFFFF05] border-[1px] border-white border-opacity-20 rounded-2xl">
        {/* Replace with relevant image */}
        <Image
          src={"/research_icon.png"} 
          width={150}
          height={150}
          alt="Research Icon" 
        />
        <p className="text-white text-xl font-medium font-poppins">
          {/* Update with relevant text */}
          Explore Our Research and Publications
        </p>
        <p className="font-poppins text-[#888D9B] text-xl font-medium text-opacity-90 md:text-opacity-80">
          {/* Update with relevant description */}
          Delve into the scientific foundation of our technology and 
          discover the latest findings in brain tumor prediction.
        </p>
      </div>
    </div>
  );
}

export function LaunchingTagThree() {
  const router = useRouter();

  const cardFunctions = () => {
    return "grid justify-center items-center border-[1px] border-white border-opacity-20 rounded-2xl bg-[#FFFFFF05] px-5 md:px-6 py-3 cursor-pointer hover:bg-opacity-60 z-30";
  };

  return (
    <div className="grid lg:grid-cols-2 gap-10 lg:gap-7 px-2 md:px-20 mt-36 md:mt-40">
      <div className="rounded-xl z-30 bg-center px-2 border-white h-[353px] md:h-[420px]">
        <a
          className="flex text-white font-poppins cursor-pointer z-30 hover:text-opacity-60 text-2xl font-medium pb-6"
          href="/team" // Changed to /team
        >
          Meet the Team{" "} 
          <ArrowRightOutlined className="ml-1 text-base pt-[2px]" />
        </a>
        <div className="w-full h-full relative">
          {/* Replace with relevant image */}
          <Image
            src={"/team_photo.png"} 
            alt="Team Photo" 
            fill
            style={{ overflow: "hidden", objectFit: "cover" }}
            className="absolute rounded-2xl brightness-50 grayscale" 
          />
          <div className="absolute bottom-10 md:bottom-4 md:left-8 px-3 md:px-0 grid gap-4 md:w-3/4 justify-start">
            <p className="text-white text-3xl font-poppins font-medium">
              {/* Update with relevant headline */}
              The Experts Behind the Technology
            </p>
            <p className="font-poppins text-[#888D9B] text-xl font-medium text-opacity-90">
              {/* Update with relevant description */}
              Learn more about the dedicated team of researchers, 
              developers, and medical professionals who made this 
              project possible.
            </p>
            <button
              onClick={() => router.push("/team")} 
              className="bg-[#FFFFFF1A] hover:bg-opacity-60 hover:text-opacity-60 font-medium px-1 py-2 rounded-xl text-white font-poppins "
            >
              Learn More ↗
            </button>
          </div>
        </div>
      </div>
      <div className="mt-14 h-full grid gap-3 py-2">
        <div className={cardFunctions()}>
          <a
            href="/faq" 
            className="text-white text-xl font-medium font-poppins hover:text-opacity-60"
          >
            Frequently Asked Questions ↗ 
          </a>
          <p className="font-poppins text-[#888D9B] text-sm md:text-lg font-semibold text-opacity-90 md:text-opacity-80">
            {/* Update with relevant description */}
            Find answers to common questions about brain tumor prediction, 
            our technology, and how to use our platform.
          </p>
        </div>
        <div className={cardFunctions()}>
          <a
            href="/about" 
            className="text-white text-xl font-medium font-poppins hover:text-opacity-60"
          >
            About Us ↗ 
          </a>
          <p className="font-poppins text-[#888D9B] text-sm md:text-lg font-semibold text-opacity-90 md:text-opacity-80">
            {/* Update with relevant description */}
            Learn More About Brainsight, support us and learn 
            more about our collaboration opportunities.
          </p>
        </div>
        {/* You can remove this third card if not needed */}
        <div className={cardFunctions()}> 
          <a
            href="/research" 
            className="text-white text-xl font-medium font-poppins hover:text-opacity-60"
          >
            Research Papers ↗ 
          </a>
          <p className="font-poppins text-[#888D9B] text-sm md:text-lg font-semibold text-opacity-90 md:text-opacity-80">
            {/* Update with relevant description */}
            Access our published research papers and scientific articles 
            related to brain tumor prediction.
          </p>
        </div> 
      </div>
    </div>
  );
}