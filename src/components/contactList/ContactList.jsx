import Contact from "../contact/Contact";
import testData from "../testData.json";

export default function ContactList() {
  const contactList = testData.map(({ name, surname, phoneNumber, id }) => (
    <Contact name={[name, surname]} phoneNumber={phoneNumber} key={id} id={id} />
  ));
  return <ul>{contactList}</ul>;
}
