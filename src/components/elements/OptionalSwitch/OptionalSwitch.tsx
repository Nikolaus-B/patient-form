import { HiCheck, HiX } from "react-icons/hi";
import { Switch } from "../../ui/switch";

interface OptionalSwitchProps {
  optionalValue?: boolean;
  optionalFieldChange: (checked: boolean) => void;
}

const OptionalSwitch: React.FC<OptionalSwitchProps> = ({
  optionalValue,
  optionalFieldChange,
}) => {
  console.log("optionalValue", optionalValue);

  return (
    <>
      <div className="absolute bottom-2 right-0">
        <Switch
          size={"sm"}
          colorPalette={"blue"}
          thumbLabel={{ on: <HiCheck />, off: <HiX /> }}
          checked={optionalValue}
          onCheckedChange={({ checked }) => optionalFieldChange(checked)}
        />
      </div>
    </>
  );
};

export default OptionalSwitch;
