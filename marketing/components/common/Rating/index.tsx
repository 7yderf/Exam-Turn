import { FC, ReactElement } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { StarIcon as StarIconOutline } from "@heroicons/react/24/outline";

interface RatingProps {
  rating?: number;
}

const Rating: FC<RatingProps> = ({ rating = 5 }): ReactElement => {
  const stars = Array.from({ length: 5 }, (_, index) =>
    rating > index ? (
      <StarIcon key={index} className="w-4 h-4" />
    ) : (
      <StarIconOutline key={index} className="w-4 h-4" />
    ),
  );

  return <div className="flex gap-1 text-yellow-400">{stars}</div>;
};

export default Rating;
