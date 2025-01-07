import { documentTypeValues } from "../../../data/selectValues";
import FormField from "../../elements/FormField/InputField";
import SelectField from "../../elements/SelectField/SelectField";

const DocumentDetails = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <SelectField
          name="documentType"
          label="Тип документу"
          required
          options={documentTypeValues}
        />
        <FormField
          name="passportSeries"
          label="Серія (за наявності), номер"
          required
        />
        <FormField name="issuedDate" label="Коли видано" type="date" required />
        <FormField name="validDate" label="Діє до" type="date" />
        <FormField name="issuedBy" label="Ким видано" required />
        <FormField
          name="unrzNumber"
          label="Запис № (УНЗР)"
          placeholder="РРРРММДД-ХХХХХ"
          additionalMessage="Вкажіть унікальний номер запису в Демографічному реєстрі(Запис №)"
          optionalAdditionalMessage={false}
          required
        />
      </div>
    </div>
  );
};

export default DocumentDetails;
