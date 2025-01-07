import { HiCheck, HiX } from "react-icons/hi";
import { Switch } from "../../ui/switch";
import { Field, FieldInputProps } from "react-final-form";

interface OptionalSwitchProps {
  switchName: string;
  optionalValue?: boolean;
  optionalFieldChange: (checked: boolean) => void;
}

const OptionalSwitch: React.FC<OptionalSwitchProps> = ({
  switchName,
  optionalValue,
  optionalFieldChange,
}) => {
  const handleOptionalFieldChange = (
    checked: boolean,
    input: FieldInputProps<HTMLElement>
  ) => {
    optionalFieldChange(checked);
    input.onChange(checked);
  };
  return (
    <>
      <div className="absolute bottom-2 right-0">
        <Field name={switchName} type="checkbox">
          {({ input }) => (
            <>
              <Switch
                {...input}
                size={"sm"}
                colorPalette={"blue"}
                thumbLabel={{ on: <HiCheck />, off: <HiX /> }}
                checked={input.value}
                defaultChecked={optionalValue}
                onCheckedChange={({ checked }) =>
                  handleOptionalFieldChange(checked, input)
                }
              />
            </>
          )}
        </Field>
      </div>
    </>
  );
};

export default OptionalSwitch;
