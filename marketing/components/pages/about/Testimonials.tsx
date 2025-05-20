import { ReactElement } from "react";

import Image from "next/image";
import Rating from "@marketing/components/common/Rating";

const Testimonials = (): ReactElement => (
  <section className="w-full bg-gray-100 py-20 md:pb-32">
    <div className="max-w-7xl mx-auto">
      <div className="flex text-center justify-center items-center flex-col gap-12">
        <div className="flex gap-4 lg:gap-2 flex-col font-semibold text-primary px-4">
          <h2 className="text-3xl md:text-4xl max-w-xl text-center">
            Testimonials
          </h2>
          <p className="text-sm md:text-base font-medium max-w-xl text-center">
            Don't just take our word for it, here's what other people have been
            saying about MHNTI!
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-4 px-4 lg:px-24 pt-4">
          <div className="w-full max-w-80 rounded-md bg-white border border-gray-150 p-6 flex flex-col gap-4 hover:shadow-md">
            <div className="text-xl font-bold">
              <Rating rating={4} />
            </div>
            <div className="text-sm font-bold text-gray-200 text-left">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </div>
            <div className="flex flex-col gap-8 justify-start">
              <div className="max-w-14 aspect-square rounded-full overflow-hidden">
                <Image
                  src={require("@shared/assets/marketing/mhnti_user1.jpg")}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-80 rounded-md bg-white border border-gray-150 p-6 flex flex-col gap-4 hover:shadow-md">
            <div className="text-xl font-bold">
              <Rating rating={4} />
            </div>
            <div className="text-sm font-bold text-gray-200 text-left">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </div>
            <div className="flex flex-col gap-8 justify-start">
              <div className="max-w-14 aspect-square rounded-full overflow-hidden">
                <Image
                  src={require("@shared/assets/marketing/mhnti_user2.jpg")}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="w-full max-w-80 rounded-md bg-white border border-gray-150 p-6 flex flex-col gap-4 hover:shadow-md">
            <div className="text-xl font-bold">
              <Rating rating={4} />
            </div>
            <div className="text-sm font-bold text-gray-200 text-left">
              Slate helps you see how many more days you need to work to reach
              your financial goal.
            </div>
            <div className="flex flex-col gap-8 justify-start">
              <div className="max-w-14 aspect-square rounded-full overflow-hidden">
                <Image
                  src={require("@shared/assets/marketing/mhnti_user3.jpg")}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
