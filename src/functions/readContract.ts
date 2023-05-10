import { Abi } from 'abitype'
import { abi } from '../contracts/abi'

declare function readContract(config: { abi: Abi; functionName: string; args: readonly unknown[] }): unknown

const res = readContract({
  abi,
  functionName: 'balanceOf',
  args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})
