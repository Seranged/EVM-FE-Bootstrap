import { isHex } from 'viem'

export const truncateAddress = (address: string) => {
  if (!!address && isHex(address)) {
    return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`
  } else {
    console.error('Address is not defined or is not a hex value.')
    return address
  }
}
