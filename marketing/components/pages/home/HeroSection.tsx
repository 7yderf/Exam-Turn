import { ReactElement } from "react";
import Image from "next/image";

import Button from "@marketing/components/ui/Button";

const HeroSection = (): ReactElement => (
  <section className="flex flex-col mb-14">
    <div className="flex flex-col bg-gradient-to-b from-primary/[0.14] via-[#FFFFFF]/[0.47] via-62% to-[#96DAFA]/[0.99] rounded-b-[50px] lg:rounded-b-[100px]">
      <div className="flex flex-col lg:flex-row flex-1 justify-around items-center w-full max-w-7xl mx-auto px-4 pt-20">
        <div className="flex-1 flex flex-col justify-center max-w-lg gap-4 md:gap-6 lg:gap-10 py-14 md:py-20 lg:py-36">
          <div className="flex flex-col gap-2 font-bold text-primary text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              Empowering <span className="text-secondary">Minds</span>,
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl">
              Elevating Care.
            </h1>
          </div>
          <div className="flex flex-col items-center md:flex-row gap-x-10 md:mb-0">
            <div className="flex-1 py-4">
              <p className="text-lg font-semibold text-primary text-center md:text-left">
                Whether you need expert consultation, CE eligible training, or a
                little extra support, we've got you!
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center lg:justify-start items-center gap-4">
            <Button size="lg" className="text-lg max-w-24">
              Sign In
            </Button>
            <Button variant="outline" size="lg" className="text-lg max-w-24">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="flex justify-end lg:self-end -mb-10">
          <div className="w-[360px] md:w-[600px] lg:w-[650px] xl:w-[800px] md:aspect-video">
            <Image
              src={require("@shared/assets/marketing/mhnti_marketing1.png")}
              alt="Home Image"
              className="hidden md:flex w-full h-full object-contain"
              priority
            />
            <Image
              src={require("@shared/assets/marketing/mhnti_marketing6.png")}
              alt="Home Image"
              className="flex md:hidden w-full h-full object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
