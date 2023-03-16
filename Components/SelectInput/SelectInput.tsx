import Arrow from "@/assets/Arrow";
import React from "react";

import styled from "styled-components";

interface Props {
  options: { label: string; value: string }[];
  onChange: (e: React.FormEvent) => void;
  arrowColor?: string;
  textColor?: string;
  backGroundColor?: string;
  borderRadius?: string;
  borderStyle?: string;
  height?: string;
}
const SelectInput: React.FC<Props> = ({
  options,
  arrowColor,
  onChange,
  textColor,
  backGroundColor,
  borderRadius,
  borderStyle,
  height,
}) => {
  const Select = styled.select`
    width: 100%;
    height: ${height || "45px"};
    background: ${backGroundColor || "transparent"};
    color: ${textColor || "gray"};
    padding-left: 5px;
    font-size: 14px;
    border: none;
    border-radius: ${borderRadius};
    cursor: pointer;
    border: ${borderStyle};

    option {
      color: black;
      background: white;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
    }
  `;
  return (
    <Select onChange={onChange}>
      {options.map((opt) => (
        <option value={opt.value} key={opt.value}>
          {opt.label}
        </option>
      ))}
      {/* <Arrow color={arrowColor} /> */}
    </Select>
  );
};

export default SelectInput;
