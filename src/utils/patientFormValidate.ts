const patientFormValidate = (values: any) => {
  const errors: any = {};
  if (!values.firstName) errors.firstName = "Обов’язкове поле";
  if (!values.lastName) errors.lastName = "Обов’язкове поле";
  return errors;
};

export default patientFormValidate;
