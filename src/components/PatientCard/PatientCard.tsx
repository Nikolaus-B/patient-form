import { Card } from "@chakra-ui/react";
import { PatientFormValues } from "../../interfaces/PatientFormValues";
type PatientCardProps = {
  patientInfo: PatientFormValues;
};

const PatientCard: React.FC<PatientCardProps> = ({ patientInfo }) => {
  return (
    <Card.Root
      width="520px"
      className="bg-white border-[1px] shadow-lg p-5 mt-5"
    >
      <Card.Body gap="2">
        <Card.Title mt="2" className="text-black text-xl font-bold">
          {patientInfo.firstName} {patientInfo.lastName}
        </Card.Title>
        <Card.Description className="text-black">
          <p>По батькові: {patientInfo?.middleName}</p>
          <p>РНОКПП(ІПН): {patientInfo?.rnokpp}</p>
          <p>Дата народження: {patientInfo.birthDate}</p>
          <p>Cтать: {patientInfo.gender}</p>
          <p>Країна народження: {patientInfo.birthCountry}</p>
          <p>Місце народження: {patientInfo.birthPlace}</p>
          <p>
            Бажаний спосіб зв'язку із пацієнтом: {patientInfo.contactMethod}
          </p>
          <p>Секретне слово(не менше 6 символів): {patientInfo.secretWord}</p>
          <p>Кортактний номер телефону: {patientInfo.phone || "Не вказано"}</p>
          <p>Адреса електронної пошти: {patientInfo.email || "Не вказано"}</p>
          <p>Тип документу: {patientInfo.documentType}</p>
          <p>Серія (за наявності), номер: {patientInfo.passportSeries}</p>
          <p>Коли видано: {patientInfo.issuedDate}</p>
          <p>Діє до: {patientInfo.validDate || "Не вказано"}</p>
          <p>Ким видано: {patientInfo.issuedBy}</p>
          <p>Запис № (УНЗР): {patientInfo.gender}</p>
        </Card.Description>
      </Card.Body>
    </Card.Root>
  );
};

export default PatientCard;
