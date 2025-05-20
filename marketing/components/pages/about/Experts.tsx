import { ReactElement } from "react";
import Image from "next/image";

import useIsMobile from "@marketing/components/hooks/useMobile";

import { cn } from "@shared/lib/utils";

const colors = ["bg-[#96DAFA]", "bg-[#252B42]", "bg-secondary"];

const experts = [
  {
    name: "Victoria Lane",
    avatar: require("@shared/assets/marketing/VictoriaLane.jpg"),
  },
  {
    name: "David Tolin",
    avatar: require("@shared/assets/marketing/DavidTolin.jpg"),
  },
  {
    name: "Emily Bailey",
    avatar: require("@shared/assets/marketing/EmilyBailey.jpg"),
  },
  {
    name: "Michelle Massi",
    avatar: require("@shared/assets/marketing/MichelleMassi.jpg"),
  },
  {
    name: "Robert Hudak",
    avatar: require("@shared/assets/marketing/RobertHudak.jpg"),
  },
  {
    name: "Cali",
    avatar: require("@shared/assets/marketing/Cali.jpg"),
  },
  {
    name: "Eric Storch",
    avatar: require("@shared/assets/marketing/EricStorch.jpg"),
  },
  {
    name: "Stacia Foss",
    avatar: require("@shared/assets/marketing/StaciaFoss.jpg"),
  },
  {
    name: "Jon Abramowitz",
    avatar: require("@shared/assets/marketing/JonAbramowitz.jpg"),
  },
  {
    name: "Ryan Judd",
    avatar: require("@shared/assets/marketing/RyanJudd.jpg"),
  },
  {
    name: "Steven Poskar",
    avatar: require("@shared/assets/marketing/StevenPoskar.jpg"),
  },
  {
    name: "Jade Wu",
    avatar: require("@shared/assets/marketing/JadeWu.jpg"),
  },
  {
    name: "Chris Trondsen",
    avatar: require("@shared/assets/marketing/ChrisTrondsen.jpg"),
  },
];

const Experts = (): ReactElement => {
  const isMobile = useIsMobile();

  const blankSize = isMobile ? experts.length % 2 : 4 - (experts.length % 4);

  return (
    <section className="w-full max-w-7xl mx-auto flex flex-col gap-12 py-10 px-4 md:px-24">
      <div className="flex flex-col items-center gap-4 text-primary text-center">
        <h5 className="text-3xl md:text-4xl font-semibold">Our Experts</h5>
        <p className="text-sm md:text-lg font-semibold">
          From all across the country, our experts joined MHNTI with one shared
          goal, helping patients by educating and consulting with other mental
          health professionals
        </p>
      </div>
      {/* Experts */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {experts.map((user) => (
          <div key={user.name} className="flex flex-col items-center gap-2">
            <div className="max-w-[300px] aspect-square rounded-2xl overflow-hidden">
              <Image
                src={user.avatar}
                alt={user.name}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        ))}
        {Array.from({ length: blankSize }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 overflow-hidden">
            <div
              className={cn(
                "w-full max-w-[300px] rounded-2xl aspect-square",
                colors[index],
              )}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;
