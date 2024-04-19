import Contact from "../contact/Contact";

export default function ContactList({ contacts }) {
  const contactList = contacts.map(({ name, phoneNumber, id }) => (
    <Contact name={name} phoneNumber={phoneNumber} key={id} id={id} />
  ));
  return <ul>{contactList}</ul>;
}
