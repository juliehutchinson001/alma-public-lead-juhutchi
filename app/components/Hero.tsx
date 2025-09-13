import Image from "next/image";

const HeroSection = () => {
  return <header className="flex bg-[#d9dea6]">
    <div className="pr-9">
      <Image
        className=""
        src="/alma-header-stock-image.png"
        alt="stock image in the home page hero section"
        width={333}
        height={605}
      />
    </div>
    <div className="flex flex-col justify-center pl-9">
      <Image
        className="mb-9"
        src="/alma-logo.png"
        alt="alma logo"
        width={90}
        height={18}
        priority
      />
      <h1 className="font-extrabold text-6xl/20">Get An Assessment <br />Of Your Immigration Case</h1>
    </div>
  </header>
}

export default HeroSection;