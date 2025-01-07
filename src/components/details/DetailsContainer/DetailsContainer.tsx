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
    <div>
      <h3 className=" font-semibold text-2xl">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default DetailsContainer;
