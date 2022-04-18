export const shortenAddress = (address) => {
  if (address === undefined) {
    return "";
  }
  return address.substring(0, 6) + "..." + address.substring(38);
};
