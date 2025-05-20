import { ReactElement } from "react";
import Image from "next/image";

const HeroSection = (): ReactElement => (
  <section className="flex flex-col mb-14">
    <div className="flex flex-col bg-gradient-to-b from-primary/[0.14] via-[#FFFFFF]/[0.47] via-62% to-[#96DAFA]/[0.99] rounded-b-[50px] lg:rounded-b-[100px] overflow-hidden">
      <div className="flex flex-col lg:flex-row flex-1 justify-around items-center w-full max-w-7xl mx-auto px-4 pt-20">
        <div className="flex-1 flex flex-col justify-center max-w-lg gap-4 py-14 md:py-20 lg:py-48">
          <div className="flex flex-col gap-4 lg:max-w-sm font-bold text-primary text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              Terms of Services
            </h1>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="w-[360px] h-[600px] lg:self-end -mb-20">
            <Image
              src={require("@shared/assets/marketing/mhnti_marketing5.png")}
              alt="About Image"
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
