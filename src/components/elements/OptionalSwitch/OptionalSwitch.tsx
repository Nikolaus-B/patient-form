import { HiCheck, HiX } from "react-icons/hi";
import { Switch } from "../../ui/switch";
import { Field, FieldInputProps } from "react-final-form";

interface OptionalSwitchProps {
  inputData?: FieldInputProps<HTMLElement>;
  additionalMessage?: string;
  switchName: string;
  isOptionalValueChecked?: boolean;
  optionalFieldChange: (checked: boolean) => void;
}

const OptionalSwitch: React.FC<OptionalSwitchProps> = ({
  inputData,
  additionalMessage,
  switchName,
  isOptionalValueChecked = true,
  optionalFieldChange,
}) => {
  const handleOptionalFieldChange = (
    checked: boolean,
    input: FieldInputProps<HTMLElement>
  ) => {
    if (checked && inputData) {
      inputData.onChange("");
    }
    if (additionalMessage && inputData && !checked) {
      inputData.onChange(additionalMessage);
    }
    optionalFieldChange(checked);

    input.onChange(checked);
  };

  return (
    <>
      <div className="absolute bottom-2 right-0">
        <Field
          name={switchName}
          type="checkbox"
          initialValue={isOptionalValueChecked}
        >
          {({ input }) => (
            <>
              <Switch
                {...input}
                size={"sm"}
                colorPalette={"blue"}
                thumbLabel={{ on: <HiCheck />, off: <HiX /> }}
                checked={input.value}
                defaultChecked={isOptionalValueChecked}
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
