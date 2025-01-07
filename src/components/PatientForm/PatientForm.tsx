import { Form } from "react-final-form";
import PatientDetails from "../details/PatientDetails/PatientDetails";
import Modal from "react-modal";
import DocumentDetails from "../details/DocumentDetails/DocumentDetails";
import DetailsContainer from "../details/DetailsContainer/DetailsContainer";
import patientFormValidate from "../../utils/patientFormValidate";
import validationSchema from "../../schemas/validationSchema";
import { PatientFormValues } from "../../interfaces/PatientFormValues";
import { useState } from "react";
import ModalContent from "../ModalContent/ModalContent";

const PatientForm = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [patientFormValues, setPatientFormValues] =
    useState<PatientFormValues | null>(null);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const onSubmit = (values: PatientFormValues) => {
    console.log("Form values:", values);
    setPatientFormValues(values);
    openModal();
  };

  return (
    <>
      <Form
        onSubmit={onSubmit}
        validate={(values) => patientFormValidate(values, validationSchema)}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <DetailsContainer title="Дані пацієнта">
              <PatientDetails />
            </DetailsContainer>
            <DetailsContainer title="Документ, що посвідчує особу">
              <DocumentDetails />
            </DetailsContainer>

            <button type="submit">Зберегти</button>
          </form>
        )}
      />
      {patientFormValues && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          // style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalContent patientFormValues={patientFormValues} />
          <button onClick={closeModal}>close</button>
        </Modal>
      )}
    </>
  );
};

export default PatientForm;
