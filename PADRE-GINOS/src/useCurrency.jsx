const intl = new Intl.NumberFormat("en-In", {
  style: "currency",
  currency: "INR",
});
export const priceConverter = (price) => intl.format(price);
export default function useCurrency(price) {
  return priceConverter(price);
}
