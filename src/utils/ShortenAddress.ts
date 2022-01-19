const ShortenAddress = (address: string) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
export default ShortenAddress;