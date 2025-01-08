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

const SelectField: React.FC<SelectFieldProps> = React.memo(
  ({ name, label, required = false, options }) => {
    return (
      <FieldContainer label={label} required={required}>
        <Field name={name} component="select">
          {({ input, meta }) => (
            <>
              <select
                {...input}
                className={`w-full outline-none border-0 border-b border-b-gray-300 bg-transparent text-black`}
              >
                <option value="">- Вибрати -</option>
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {meta.submitFailed && meta.touched && meta.error && (
                <>
                  <p className="absolute bottom-[-24px] right-0 text-red-500 w-fit ml-auto">
                    {meta.error}
                  </p>
                </>
              )}
            </>
          )}
        </Field>
      </FieldContainer>
    );
  }
);

export default SelectField;
