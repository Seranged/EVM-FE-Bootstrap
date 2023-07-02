import { Abi, AbiFunction, AbiParametersToPrimitiveTypes, ExtractAbiFunction, ExtractAbiFunctionNames } from 'abitype'
import { abi } from '../contracts/abi'

export declare function readContract<
  TAbi extends Abi,
  TFunctionName extends ExtractAbiFunctionNames<TAbi, 'pure' | 'view'>,
  TAbiFunction extends AbiFunction = ExtractAbiFunction<TAbi, TFunctionName>,
>(config: {
  abi: TAbi
  functionName: TFunctionName | ExtractAbiFunctionNames<TAbi, 'pure' | 'view'>
  args: AbiParametersToPrimitiveTypes<TAbiFunction['inputs'], 'inputs'>
}): AbiParametersToPrimitiveTypes<TAbiFunction['outputs'], 'outputs'>

export const res = readContract({
  abi,
  functionName: 'balanceOf',
  args: ['0xA0Cf798816D4b9b9866b5330EEa46a18382f251e'],
})
