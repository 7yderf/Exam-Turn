import { ReactElement } from "react";
import Image from "next/image";

const HeroSection = (): ReactElement => (
  <section className="flex flex-col mb-14">
    <div className="flex flex-col bg-gradient-to-b from-primary/[0.14] via-[#FFFFFF]/[0.47] via-62% to-[#96DAFA]/[0.99] rounded-b-[50px] lg:rounded-b-[100px] overflow-hidden">
      <div className="flex flex-col lg:flex-row flex-1 justify-around items-center w-full max-w-7xl mx-auto px-4 pt-20">
        <div className="flex-1 flex flex-col justify-center max-w-lg gap-4 py-14 md:py-20 lg:py-48">
          <div className="flex flex-col gap-4 lg:max-w-sm font-bold text-primary text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              Our <span className="text-secondary">Experts,</span>
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              <span className="text-secondary">Your</span> Practice.
            </h1>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-x-10 md:mb-0">
            <div className="flex-1 py-4">
              <p className="text-lg font-semibold text-primary text-center md:text-left">
                We are so fortunate to have a team of inspiring, brilliant,
                passionate, experts willing to invest their time in expanding
                access to evidence based treatment.
              </p>
            </div>
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
