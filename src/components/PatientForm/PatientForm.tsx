import { Form } from "react-final-form";
import PatientDetails from "../details/PatientDetails/PatientDetails";
import patientFormValidate from "../../utils/patientFormValidate";
import DocumentDetails from "../details/DocumentDetails/DocumentDetails";
import DetailsContainer from "../details/DetailsContainer/DetailsContainer";

const PatientForm = () => {
  const onSubmit = (values: any) => {
    console.log("Form values:", values);
  };
  return (
    <Form
      onSubmit={onSubmit}
      validate={patientFormValidate}
      render={({ handleSubmit, errors }) => (
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
  );
};

export default PatientForm;
