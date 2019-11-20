export const kFormatter = num => {
  return Math.abs(num) > 99999
    ? "HK$" + Math.sign(num) * (Math.abs(num) / 1000000).toFixed(1) + "M"
    : "HK$" + Math.sign(num) * Math.abs(num);
};
