

type query = string|null;

export const useMediaQuery = (query: query = null) => {
  const windowSize = ref<any>(false);
  const mobile = matchMedia(query ?? "(min-width: 0px)");
  
  windowSize.value = mobile.matches;
  
    const medialistener = (e: any) => {
      return (windowSize.value = e.matches);
    };
    mobile.addEventListener("change", medialistener);
 
  return {
    windowSize
  };
};

export const useSizeResponsive= () => useState('sizeResponsive', () => false);


export const useShowMenu = () => useState('showMenu', () => false);

export const useToggler = () => useState('toggler', () => false);

export const useformatPrice = (value:any) => {
  const formatter = new Intl.NumberFormat("en-US", {
  currency: "USD",
  style: "currency",
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
})
  return formatter.format(value)
};

export const useApiLink = (link: "") => {
  let isProducts = link.includes("products")
  return  isProducts ? 
  link.replace("http://ecommerce:9000/api/products", ``) : 
  link.replace("http://ecommerce:9000/api/circuits", ``)
}