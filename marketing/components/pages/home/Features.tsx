import { ReactElement } from "react";
import Image from "next/image";

const Features = (): ReactElement => (
  <section className="w-full max-w-7xl mx-auto flex flex-col gap-32 pt-10 px-6 md:px-24">
    <div className="flex flex-col items-center gap-4 text-primary text-center">
      <h5 className="text-3xl md:text-4xl font-semibold">
        A one-stop-shop for mental health professionals
      </h5>
      <p className="text-sm md:text-lg font-semibold max-w-lg">
        We support the educational needs of mental health therapists striving
        for evidence based practice.
      </p>
    </div>
    {/* Expert Consults */}
    <div className="lg:bg-secondary rounded-2xl py-8 md:px-12 flex flex-col lg:flex-row-reverse gap-6">
      <div className="flex justify-center">
        <div className="w-[250px] -mt-32">
          <Image
            src={require("@shared/assets/marketing/mhnti_marketing2.png")}
            alt="Home Image"
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
      <div className="bg-secondary rounded-xl p-6 lg:bg-transparent flex flex-1 flex-col gap-2 text-white">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl lg:text-4xl text-center lg:text-left">
              Expert Consults
            </h2>
            <p className="text-base lg:text-lg font-semibold text-left">
              Our experts are thought leaders that come from the best hospitals
              and treatment centers in the world, and they're all available to
              you for group or one on one consults and live and recorded
              trainings!
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* CEU Credits */}
    <div className="lg:bg-accent-5 rounded-2xl py-8 md:px-12 flex flex-col lg:flex-row gap-6">
      <div className="flex justify-center">
        <div className="w-[250px] -mt-32">
          <Image
            src={require("@shared/assets/marketing/mhnti_marketing3.png")}
            alt="Home Image"
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
      <div className="bg-gray-800 rounded-xl p-6 lg:bg-transparent flex flex-1 flex-col gap-2 text-white">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl lg:text-4xl text-center lg:text-left">
              CE Credits
            </h2>
            <div className="text-base lg:text-lg font-semibold text-left">
              <p>Tracking CEs has never been easier! With MHNTI you can:</p>
              <ul className="pl-8 list-disc">
                <li>
                  Watch CE trainings, complete tests, collect certificates
                </li>
                <li>Upload external CE certificates</li>
                <li>Receive your certificate</li>
                <li>Track your CE progress each license period</li>
              </ul>
            </div>
            <p className="text-base lg:text-lg font-semibold text-left">
              All in one place! Listen on the go with our mobile app! Approved
              to offer CEs by the{" "}
              <a href="https://www.apa.org/" className="underline">
                APA
              </a>{" "}
              (American Psychological Association) and{" "}
              <a href="https://www.aswb.org/" className="underline">
                ASWB
              </a>{" "}
              (Association of Social Work Boards) with more on the way soon!
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Live Webinars and Videos */}
    <div className="lg:bg-[#96DAFA] lg:rounded-2xl py-8 md:px-12 flex flex-col lg:flex-row-reverse gap-6">
      <div className="flex justify-center">
        <div className="w-[250px] -mt-32">
          <Image
            src={require("@shared/assets/marketing/mhnti_marketing4.png")}
            alt="Home Image"
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
      <div className="bg-[#96DAFA] rounded-xl p-6 lg:bg-transparent flex flex-1 flex-col gap-2 text-primary">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl lg:text-4xl text-center lg:text-left">
              Live Webinars and Videos
            </h2>
            <p className="text-base lg:text-lg font-semibold text-left">
              MHNTI has curated the best educational videos, webinars, guides,
              and resources for disorders and  treatment modalities. We are
              constantly curating our library to increase access to
              evidence-based trainings. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
