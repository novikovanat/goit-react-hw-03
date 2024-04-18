import { useState } from "react";
import ContactForm from "./contactForm/ContactForm";
import SearchBox from "./searchBox/SearchBox";
import ContactList from "./contactList/ContactList";
import testData from "./testData.json";

const App = () => {
  const [searchFilter, setSearchFilter] = useState("");

  const shownContacts = testData.filter((contact) =>
    contact.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  function handleSubmit(initialValues) {
    console.log(JSON.stringify(initialValues));
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm initialValues={testData} handleSubmit={handleSubmit} />
      <SearchBox value={searchFilter} onSearch={setSearchFilter} />
      <ContactList contacts={shownContacts} />
    </div>
  );
};

export default App;
