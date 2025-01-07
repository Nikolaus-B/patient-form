import { ReactNode } from "react";

type FieldContainerProps = {
  name: string;
  label: string;
  required: boolean;
  children: ReactNode;
  errorMessage?: string;
};

const FieldContainer: React.FC<FieldContainerProps> = ({
  name,
  label,
  required = false,
  children,
  errorMessage,
}) => {
  return (
    <div className="form-group flex gap-2 flex-col">
      <label htmlFor={name} className=" text-gray-400 ">
        {label} {required && <span>*</span>}
      </label>
      {children}
      <p className="">{errorMessage}</p>
    </div>
  );
};

export default FieldContainer;
