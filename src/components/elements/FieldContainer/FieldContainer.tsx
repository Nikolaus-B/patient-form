import { ReactNode } from "react";

type FieldContainerProps = {
  label: string;
  required: boolean;
  children: ReactNode;
  errorMessage?: string;
};

const FieldContainer: React.FC<FieldContainerProps> = ({
  label,
  required = false,
  children,
  errorMessage,
}) => {
  return (
    <div className="form-group flex gap-2 flex-col">
      <label className=" text-gray-400 ">
        {label} {required && <span>*</span>}
      </label>
      <div className=" relative">{children}</div>
      <p className="">{errorMessage}</p>
    </div>
  );
};

export default FieldContainer;
