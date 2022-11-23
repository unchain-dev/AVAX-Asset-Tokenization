/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace Manager {
  export type AttributeStruct = {
    id: PromiseOrValue<BigNumberish>;
    farmerName: PromiseOrValue<string>;
    cropsName: PromiseOrValue<string>;
    description: PromiseOrValue<string>;
    totalMint: PromiseOrValue<BigNumberish>;
    availableMint: PromiseOrValue<BigNumberish>;
    price: PromiseOrValue<BigNumberish>;
    expirationDate: PromiseOrValue<BigNumberish>;
  };

  export type AttributeStructOutput = [
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    id: BigNumber;
    farmerName: string;
    cropsName: string;
    description: string;
    totalMint: BigNumber;
    availableMint: BigNumber;
    price: BigNumber;
    expirationDate: BigNumber;
  };
}

export interface ManagerInterface extends utils.Interface {
  functions: {
    "allAttribute()": FunctionFragment;
    "allCropNft(uint256)": FunctionFragment;
    "buy(uint256)": FunctionFragment;
    "getAddress(uint256)": FunctionFragment;
    "newCrops(string,string,string,uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "allAttribute"
      | "allCropNft"
      | "buy"
      | "getAddress"
      | "newCrops"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "allAttribute",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allCropNft",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "newCrops",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "allAttribute",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allCropNft", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newCrops", data: BytesLike): Result;

  events: {};
}

export interface Manager extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ManagerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    allAttribute(
      overrides?: CallOverrides
    ): Promise<[Manager.AttributeStructOutput[]]>;

    allCropNft(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    buy(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAddress(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    newCrops(
      _farmerName: PromiseOrValue<string>,
      _cropsName: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _totalMint: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _expirationDate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  allAttribute(
    overrides?: CallOverrides
  ): Promise<Manager.AttributeStructOutput[]>;

  allCropNft(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  buy(
    id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAddress(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  newCrops(
    _farmerName: PromiseOrValue<string>,
    _cropsName: PromiseOrValue<string>,
    _description: PromiseOrValue<string>,
    _totalMint: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    _expirationDate: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    allAttribute(
      overrides?: CallOverrides
    ): Promise<Manager.AttributeStructOutput[]>;

    allCropNft(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    buy(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getAddress(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    newCrops(
      _farmerName: PromiseOrValue<string>,
      _cropsName: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _totalMint: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _expirationDate: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    allAttribute(overrides?: CallOverrides): Promise<BigNumber>;

    allCropNft(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    buy(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAddress(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    newCrops(
      _farmerName: PromiseOrValue<string>,
      _cropsName: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _totalMint: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _expirationDate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allAttribute(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allCropNft(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    buy(
      id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAddress(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newCrops(
      _farmerName: PromiseOrValue<string>,
      _cropsName: PromiseOrValue<string>,
      _description: PromiseOrValue<string>,
      _totalMint: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _expirationDate: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}