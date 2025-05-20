import { ReactElement } from "react";

const Mission = (): ReactElement => {
  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col gap-32 py-10 px-4 md:px-24">
      <div className="flex flex-col items-center gap-4 text-primary">
        <h5 className="text-3xl md:text-4xl font-semibold text-center">Our Mission</h5>
        <p className="text-base md:text-lg font-semibold text-center lg:text-left">
          We started MHNTI to not only ease the burden of staying on top of your
          licensure, but also to give providers a singular place to go to
          inform, educate, consult and learn.
        </p>
      </div>
    </section>
  );
};

export default Mission;
