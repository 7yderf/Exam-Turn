export const priceFormat = (value: number) => {
    let val = (value / 1).toFixed(2);
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
export const kmFormat = (value: number) => {
let val = value / 1;
return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};