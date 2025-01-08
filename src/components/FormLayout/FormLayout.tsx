import PatientForm from "../PatientForm/PatientForm";

const FormLayout = () => {
  return (
    <section className=" mx-10 my-5 shadow-md">
      <div className=" bg-[#189ED8] px-5 py-3">
        <p className=" text-[#FDFEFF] font-semibold">Створення персони</p>
      </div>
      <div className="px-5 py-3 border-[1px] border-t-0 border-neutral-200">
        <PatientForm />
      </div>
    </section>
  );
};

export default FormLayout;
