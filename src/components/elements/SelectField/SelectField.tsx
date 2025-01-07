import React from "react";
import { Field } from "react-final-form";
import FieldContainer from "../FieldContainer/FieldContainer";

type Option = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  name: string;
  label: string;
  required?: boolean;
  options: Option[];
  isSelectEnabled?: boolean;
};

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  label,
  required = false,
  options,
}) => {
  return (
    <FieldContainer label={label} name={name} required={required}>
      <Field
        name={name}
        component="select"
        // disabled={}
        className={`outline-none border-0 border-b border-b-gray-300 bg-transparent text-black`}
      >
        <option value="">- Вибрати -</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    </FieldContainer>
  );
};

export default SelectField;
