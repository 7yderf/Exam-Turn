import { ReactElement } from "react";

import EmailInput from "@marketing/components/common/Inputs/EmailInput";

const Contact = (): ReactElement => (
  <section className="w-full bg-primary py-10">
    <div className="w-full max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-12">
        <div className="flex gap-2 flex-col text-white text-center lg:text-left px-4">
          <h2 className="text-3xl md:text-4xl max-w-lg font-semibold">
            Stay In Touch
          </h2>
          <p className="text-base md:text-lg max-w-lg font-medium">
            Join our mailing list to stay up to date with exciting things
            happening with MHNTI!
          </p>
        </div>
        <EmailInput />
      </div>
    </div>
  </section>
);

export default Contact;
