import React from "react";
import { PatientFormValues } from "../../interfaces/PatientFormValues";

interface ModalContentProps {
  patientFormValues: PatientFormValues;
}

const ModalContent: React.FC<ModalContentProps> = ({ patientFormValues }) => {
  return <div>{patientFormValues.lastName}</div>;
};

export default ModalContent;
