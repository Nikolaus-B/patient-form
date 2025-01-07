import React, { useState } from "react";
import { Field } from "react-final-form";
import OptionalSwitch from "../OptionalSwitch/OptionalSwitch";
import FieldContainer from "../FieldContainer/FieldContainer";
import { HiExclamationCircle } from "react-icons/hi";

type FormFieldProps = {
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

const FormField: React.FC<FormFieldProps> = React.memo(
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
    const [optionalValue, setOptionalValue] = useState(true);

    const optionalFieldChange = (checked: boolean) => {
      setOptionalValue(checked);
    };

    return (
      <FieldContainer label={label} required={required}>
        <div className="relative">
          <Field name={name}>
            {({ input, meta }) => (
              <div className=" relative">
                <input
                  {...input}
                  type={type}
                  placeholder={placeholder}
                  disabled={optionalValue ? false : true}
                  className={`w-full outline-none border-0 border-b ${
                    meta.submitFailed && meta.touched && meta.error
                      ? "border-b-red-500"
                      : "border-b-gray-300"
                  }   bg-transparent text-black`}
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
                      (!optionalAdditionalMessage || !optionalValue) && (
                        <p className="absolute bottom-[-24px] left-0 text-gray-400 text-sm">
                          {additionalMessage}
                        </p>
                      )}
                  </>
                )}
              </div>
            )}
          </Field>

          {optional && switchName && (
            <OptionalSwitch
              switchName={switchName}
              optionalValue={optionalValue}
              optionalFieldChange={optionalFieldChange}
            />
          )}
        </div>
      </FieldContainer>
    );
  }
);

export default FormField;
