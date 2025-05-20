import { ReactElement } from "react";

import AppStoreButton from "@marketing/components/common/Buttons/AppStore";
import GooglePlayButton from "@marketing/components/common/Buttons/GooglePlay";

const SocialSection = (): ReactElement => {
  return (
    <section className="w-full max-w-7xl mx-auto py-12">
      <div className="flex flex-col lg:flex-row items-center justify-around gap-6">
        <AppStoreButton />
        <GooglePlayButton />
      </div>
    </section>
  );
};

export default SocialSection;
