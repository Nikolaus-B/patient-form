import React from "react";
import { Field } from "react-final-form";

type FormFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  required?: boolean;
};

const FormField: React.FC<FormFieldProps> = ({
  name,
  label,
  placeholder,
  required,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <Field
        name={name}
        component="input"
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;
