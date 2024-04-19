import Contact from "../contact/Contact";

export default function ContactList({ contacts, onDelete }) {
  const contactList = contacts.map(({ name, phoneNumber, id }) => (
    <Contact
      name={name}
      phoneNumber={phoneNumber}
      key={id}
      id={id}
      onDelete={onDelete}
    />
  ));
  return <ul>{contactList}</ul>;
}
