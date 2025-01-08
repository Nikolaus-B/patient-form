import React, { useState } from "react";
import { Field } from "react-final-form";
import OptionalSwitch from "../OptionalSwitch/OptionalSwitch";
import FieldContainer from "../FieldContainer/FieldContainer";
import { HiExclamationCircle } from "react-icons/hi";
import normalizeSpaces from "../../../utils/normalizeSpaces";

type InputFieldProps = {
  name: string;
  label: string;
  type?: string;
  switchName?: string;
  placeholder?: string;
  required?: boolean;
  optional?: boolean;
  additionalMessage?: string;
  optionalAdditionalMessage?: boolean;
};

const InputField: React.FC<InputFieldProps> = React.memo(
  ({
    name,
    label,
    switchName,
    type = "text",
    placeholder,
    additionalMessage,
    optionalAdditionalMessage,
    required = false,
    optional,
  }) => {
    const [isOptionalValueChecked, setIsOptionalValueChecked] = useState(true);

    const optionalFieldChange = (checked: boolean) => {
      setIsOptionalValueChecked(checked);
    };

    return (
      <FieldContainer label={label} required={required}>
        <Field name={name}>
          {({ input, meta }) => (
            <>
              <input
                {...input}
                type={type}
                placeholder={placeholder}
                disabled={isOptionalValueChecked ? false : true}
                onChange={(e) =>
                  input.onChange(normalizeSpaces(e.target.value, type))
                }
                className={`w-full outline-none border-0 border-b ${
                  meta.submitFailed && meta.touched && meta.error
                    ? "border-b-red-500"
                    : "border-b-gray-300"
                } 
                ${
                  !isOptionalValueChecked
                    ? "!text-transparent caret-transparent"
                    : "text-black"
                }   
                bg-transparent `}
              />

              {meta.submitFailed && meta.touched && meta.error ? (
                <>
                  <HiExclamationCircle
                    className="absolute bottom-2 right-0"
                    color="red"
                  />
                  <p className="absolute bottom-[-24px] right-0 text-red-500 w-fit ml-auto">
                    {meta.error}
                  </p>
                </>
              ) : (
                <>
                  {additionalMessage &&
                    (!optionalAdditionalMessage || !isOptionalValueChecked) && (
                      <p className="absolute bottom-[-24px] left-0 text-gray-400 text-sm">
                        {additionalMessage}
                      </p>
                    )}
                </>
              )}

              {optional && switchName && (
                <OptionalSwitch
                  inputData={input}
                  additionalMessage={additionalMessage}
                  switchName={switchName}
                  isOptionalValueChecked={isOptionalValueChecked}
                  optionalFieldChange={optionalFieldChange}
                />
              )}
            </>
          )}
        </Field>
      </FieldContainer>
    );
  }
);

export default InputField;
