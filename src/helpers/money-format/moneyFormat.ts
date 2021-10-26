export const formatMoney = (money: any) => {
  return parseFloat(money)
    .toFixed(2)
    .replace(/(\d)(?=(\d{3})+\.)/g, "$1.")
    .replace(/\.(\d+)$/, ",$1");
};
