import * as yup from "yup";

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, "Кількість символів має бути не менше 2")
    .required("Поле не може бути пустим"),
  lastName: yup
    .string()
    .min(2, "Кількість символів має бути не менше 2")
    .required("Поле не може бути пустим"),
  isMiddleName: yup.bool(),
  middleName: yup.string().when("isMiddleName", {
    is: true,
    then: (schema) =>
      schema
        .min(2, "Кількість символів має бути не менше 2")
        .required("Поле не може бути пустим"),
    otherwise: (schema) =>
      schema.min(2, "Кількість символів має бути не менше 2").notRequired(),
  }),
  isTaxId: yup.bool(),
  rnokpp: yup.string().when("isTaxId", {
    is: true,
    then: (schema) =>
      schema
        .required("Поле не може бути пустим")
        .length(10, "Ідентифікаційний номер повинен містити 10 символів"),
    otherwise: (schema) => schema.notRequired(),
  }),
  birthDate: yup.string().required("Поле не може бути пустим"),
  gender: yup.string().required("Поле не може бути пустим"),
  birthCountry: yup.string().required("Поле не може бути пустим"),
  birthPlace: yup.string().required("Поле не може бути пустим"),
  contactMethod: yup.string(),
  secretWord: yup
    .string()
    .min(6, "Секретне слово повинно містити не менше 6 символів")
    .required("Поле не може бути пустим"),
  phone: yup.string().when("contactMethod", {
    is: "phone",
    then: (schema) =>
      schema
        .matches(
          /^\+38\s?\(?0\d{2}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
          "Некоректний номер телефону. Приклад: +38 (093) 999-88-77"
        )
        .required("Поле не може бути пустим"),

    otherwise: (schema) =>
      schema.matches(
        /^\+38\s?\(?0\d{2}\)?\s?\d{3}-?\d{2}-?\d{2}$/,
        "Некоректний номер телефону. Приклад: +38 (093) 999-88-77"
      ),
  }),
  email: yup.string().when("contactMethod", {
    is: "mail",
    then: (schema) =>
      schema
        .email("Невірний формат email")
        .required("Поле не може бути пустим"),
    otherwise: (schema) => schema.email("Невірний формат email"),
  }),
  documentType: yup.string().required("Поле не може бути пустим"),
  passportSeries: yup.string().when("documentType", {
    is: (val: string) => !["passportIdCard", "passportBooklet"].includes(val),
    then: (schema) =>
      schema
        .matches(
          /^[А-ЩЬЮЯЄІЇҐ]{3}\d{5,9}$/,
          "Документ повинен містити 3 українські літери та від 5 до 9 цифр"
        )
        .required("Поле не може бути пустим"),
    otherwise: (schema) => schema.required("Поле не може бути пустим"),
  }),
  issuedDate: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD")
    .required("Поле не може бути пустим"),
  validDate: yup
    .string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, "Date must be in the format YYYY-MM-DD"),
  issuedBy: yup.string().required("Поле не може бути пустим"),
  unrzNumber: yup
    .string()
    .matches(
      /^\d{8}-\d{5}$/,
      "Запис № (УНЗР) має бути у форматі РРРРММДД-ХХХХХ"
    )
    .required("Поле не може бути пустим"),
});

export default validationSchema;
