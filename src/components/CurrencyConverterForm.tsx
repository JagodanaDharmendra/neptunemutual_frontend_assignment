import React, { useState } from "react";
import RoundNumber from "../utils/RoundNumber";

interface IInputProps {
  label: string;
  placeholder: string;
  name: string;
  value: number;
  type: string;
  onChange: (name: string, value: number) => void;
}

const InputField = (props: IInputProps) => {
  return (
    <div className="my-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        type={props.type}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        step="0.01"
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={(e) => {
          props.onChange(props.name, parseFloat(e.target.value));
        }}
      />
    </div>
  );
};

interface IProps {
  children?: React.ReactNode;
  onInfoClick?: () => void;
}

const CurrencyConverterForm = (props: IProps) => {
  const [currencyValue, setCurrencyValue] = useState(0.0);

  return (
    <div className="flex flex-col w-full px-4">
      <h1 className="font-bold text-black text-xl text-left justify-start">
        Crypto Converter
      </h1>
      <div className="flex flex-col w-full mt-4">
        <InputField
          label="NEP"
          placeholder="Enter NEP's value"
          name="NEP"
          value={RoundNumber(currencyValue)}
          type="number"
          onChange={(name: string, value: number) => {
            console.log({
              name,
              value,
            });
            setCurrencyValue(value);
          }}
        />
        <InputField
          label="BUSD"
          placeholder="Enter BUSD's value"
          name="BUSD"
          value={RoundNumber(currencyValue * 3)}
          type="number"
          onChange={(name: string, value: number) => {
            console.log({
              name,
              value,
            });
            setCurrencyValue(value / 3);
          }}
        />
      </div>
    </div>
  );
};

export default CurrencyConverterForm;
