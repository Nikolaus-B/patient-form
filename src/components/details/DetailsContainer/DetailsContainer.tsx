import { ReactNode } from "react";

type DetailsContainerProps = {
  title: string;
  children: ReactNode;
};

const DetailsContainer: React.FC<DetailsContainerProps> = ({
  title,
  children,
}) => {
  return (
    <div className="">
      <h3 className=" font-semibold text-2xl mb-3">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default DetailsContainer;
