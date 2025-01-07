import React, { useState } from "react";
import { Field } from "react-final-form";
import OptionalSwitch from "../OptionalSwitch/OptionalSwitch";
import FieldContainer from "../FieldContainer/FieldContainer";

type FormFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
  errorMessage?: string;
};

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  required = false,
  optional,
  errorMessage,
}) => {
  const [optionalValue, setOptionalValue] = useState(true);

  const optionalFieldChange = (checked: boolean) => {
    console.log("checked", checked);

    setOptionalValue(checked);
  };
  return (
    <FieldContainer label={label} name={name} required={required}>
      <div className="relative">
        <Field
          name={name}
          component="input"
          type="text"
          placeholder={placeholder}
          className={`w-full outline-none border-0 border-b border-b-gray-300 bg-transparent text-black`}
        ></Field>
        {optional && (
          <OptionalSwitch
            optionalValue={optionalValue}
            optionalFieldChange={optionalFieldChange}
          />
        )}
      </div>
      <p className="">{errorMessage}</p>
    </FieldContainer>
  );
};

export default FormField;
