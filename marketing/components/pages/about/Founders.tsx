import { ReactElement } from "react";
import BioDialog from "@marketing/components/common/BioDialog";

const founders = [
  {
    name: "Lauren Wadsworth, PhD ABPP",
    avatar: require("@shared/assets/marketing/LaurenWadsworth.jpg"),
    bio: (
      <p className="text-primary">
        <span className="font-bold">Dr. Lauren Wadsworth</span> is a board
        certified clinical psychologist passionate about expanding access to
        evidence-based mental health treatments as well as furthering diversity
        and inclusion efforts. Dr. Wadsworth completed her undergraduate degree
        at Smith College and her doctorate at the University of Massachusetts
        Boston, receiving her clinical training at McLean Hospital/Harvard
        Medical School. She is the founding director of{" "}
        <span className="underline">Genesee Valley Psychology</span> (GVP), an
        insurance-based clinic providing financially accessible evidence-based
        treatment to the Western NY area, with offices in Rochester and Buffalo.
        Dr. Wadsworth is also the founding director of{" "}
        <span className="underline">Meridian Psychology Practice</span>, a
        private-pay clinic serving NY, MA, and GA. She is the co-founder of{" "}
        <span className="underline">Twin Stars Diversity Trainers</span>, a
        consultation company offering diversity and identity-related trainings
        for organizations and leadership, and co-authored a related book:{" "}
        <span className="underline">
          Did That Just Happen?! Beyond "Diversity" - Creating Sustainable and
          Inclusive Organizations
        </span>
        . Dr. Wadsworth serves as a Senior Advisor on the Anti-Racist, Justice
        and Health Equity team at McLean Hospital/Harvard Medical School.
        Finally, she is a Clinical Senior Instructor in Psychiatry at the
        University of Rochester Medical Center.
      </p>
    ),
  },
  {
    name: "Elizabeth McIngvale, PhD, LCSW",
    avatar: require("@shared/assets/marketing/ElizabethMclngvale.jpg"),
    bio: (
      <p className="text-primary">
        <span className="font-semibold">Elizabeth McIngvale, Ph.D.</span> is the
        director of the OCD Institute of Texas and adjunct faculty at Baylor
        College of Medicine. Elizabeth founded the Peace of Mind foundation and
        OCDChallenge.org (a self-help website for OCD), both now within the
        International OCD Foundation (IOCDF). Elizabeth was the first- ever
        national spokesperson for the IOCDF where she now serves as a board
        member and national advocate. She was diagnosed with OCD at 12 and
        engaged in inpatient and outpatient therapy. Dr. McIngvale engages in
        clinical work, research and advocacy with the goal of improving access
        to care and treatment for those living with OCD.
      </p>
    ),
  },
];

const Founders = (): ReactElement => (
  <section className="w-full max-w-7xl mx-auto flex flex-col gap-12 py-10 px-4 md:px-24">
    <div className="flex flex-col items-center gap-4 text-primary text-center">
      <h5 className="text-3xl md:text-4xl font-semibold">Our Founders</h5>
      <p className="text-sm md:text-lg font-semibold">
        Developed by two clinicians with a dream of increasing access to
        evidence-based care via easy access to experts and training.
      </p>
    </div>
    {/* Founders */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {founders.map((user) => (
        <BioDialog
          key={user.name}
          name={user.name}
          avatar={user.avatar}
          bio={user.bio}
        />
      ))}
    </div>
  </section>
);

export default Founders;
