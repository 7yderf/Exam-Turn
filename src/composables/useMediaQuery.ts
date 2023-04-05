
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