import { g as useState } from './server.mjs';

const useShowMenu = () => useState("showMenu", () => false);
const useToggler = () => useState("toggler", () => false);
const useformatPrice = (value) => {
  const formatter = new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  });
  return formatter.format(value);
};

export { useShowMenu as a, useToggler as b, useformatPrice as u };
//# sourceMappingURL=useMediaQuery-a9f2c236.mjs.map
