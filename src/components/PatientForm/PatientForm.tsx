import { Form } from "react-final-form";
import PatientDetails from "../details/PatientDetails/PatientDetails";
import DocumentDetails from "../details/DocumentDetails/DocumentDetails";
import DetailsContainer from "../details/DetailsContainer/DetailsContainer";
import patientFormValidate from "../../utils/patientFormValidate";
import validationSchema from "../../schemas/validationSchema";
import { PatientFormValues } from "../../interfaces/PatientFormValues";
import { useState } from "react";

import { Button } from "@chakra-ui/react";
import PatientCard from "../PatientCard/PatientCard";

const PatientForm = () => {
  const [patientFormValues, setPatientFormValues] =
    useState<PatientFormValues | null>(null);

  const onSubmit = (values: PatientFormValues) => {
    // console.log("Form values:", values);
    setPatientFormValues(values);
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={(values) => patientFormValidate(values, validationSchema)}
        render={({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className=" flex flex-col gap-5 justify-center"
          >
            <DetailsContainer title="Дані пацієнта">
              <PatientDetails />
            </DetailsContainer>
            <DetailsContainer title="Документ, що посвідчує особу">
              <DocumentDetails />
            </DetailsContainer>

            <Button
              type="submit"
              className="bg-[#189ED8] text-white p-5 mt-5 ml-auto mr-auto"
            >
              Зберегти
            </Button>
          </form>
        )}
      />
      {patientFormValues && <PatientCard patientInfo={patientFormValues} />}
    </>
  );
};

export default PatientForm;
