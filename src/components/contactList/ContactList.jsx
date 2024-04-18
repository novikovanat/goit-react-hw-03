import Contact from "../contact/Contact";

export default function ContactList({ contacts }) {
  const contactList = contacts.map(({ name, surname, phoneNumber, id }) => (
    <Contact
      name={[name, surname]}
      phoneNumber={phoneNumber}
      key={id}
      id={id}
    />
  ));
  return <ul>{contactList}</ul>;
}
