import { useState } from "react";
import ContactForm from "./contactForm/ContactForm";
import SearchBox from "./searchBox/SearchBox";
import ContactList from "./contactList/ContactList";
import testData from "./testData.json";

const App = () => {
  const [searchFilter, setSearchFilter] = useState("");

  const shownContacts = testData.filter(
    (contact) =>
      contact.name
        .toLocaleLowerCase()
        .includes(searchFilter.toLocaleLowerCase()) ||
      contact.surname
        .toLocaleLowerCase()
        .includes(searchFilter.toLocaleLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={searchFilter} onSearch={setSearchFilter} />
      <ContactList contacts={shownContacts} />
    </div>
  );
};

export default App;
