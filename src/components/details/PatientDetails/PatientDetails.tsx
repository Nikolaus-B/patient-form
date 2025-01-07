import React from "react";
import FormField from "../../elements/FormField/InputField";
import SelectField from "../../elements/SelectField/SelectField";
import {
  comunicationMethodValues,
  genderValues,
} from "../../../data/selectValues";

const PatientDetails: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <FormField name="firstName" label="Прізвище" required />
        <FormField name="lastName" label="Ім’я" required />
        <FormField
          name="middleName"
          label="По батькові"
          required
          optional={true}
          switchName={"isMiddleName"}
          additionalMessage={"Немає по батькові згідно документів"}
          optionalAdditionalMessage={true}
        />
        <FormField
          name="rnokpp"
          label="РНОКПП(ІПН)"
          required
          optional={true}
          switchName={"isTaxId"}
          additionalMessage={"Немає ІПН за віком чи має відмітку у паспорті"}
          optionalAdditionalMessage={true}
        />
        <FormField
          name="birthDate"
          label="Дата народження"
          type="date"
          required
        />
        <SelectField
          name="gender"
          label="Cтать"
          options={genderValues}
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6  ">
        <FormField name="birthCountry" label="Країна народження" required />
        <FormField name="birthPlace" label="Місце народження" required />
        <SelectField
          name="contactMethod"
          label="Бажаний спосіб зв'язку із пацієнтом"
          options={comunicationMethodValues}
        />
        <FormField
          name="secretWord"
          label="Секретне слово(не менше 6 символів)"
          required
        />
        <FormField
          name="phone"
          label="Кортактний номер телефону"
          placeholder="+38 (___) ___-__-__"
        />
        <FormField
          name="email"
          label="Адреса електронної пошти"
          placeholder="example@example.com"
        />
      </div>
    </div>
  );
};

export default PatientDetails;
