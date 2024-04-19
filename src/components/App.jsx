import { useState } from "react";
import { nanoid } from 'nanoid'
import ContactForm from "./contactForm/ContactForm";
import SearchBox from "./searchBox/SearchBox";
import ContactList from "./contactList/ContactList";
import testData from "./testData.json";

const App = () => {
  const [searchFilter, setSearchFilter] = useState("");

  const shownContacts = testData.filter((contact) =>
    contact.name.toLowerCase().includes(searchFilter.toLowerCase())
  );



  function handleSubmit(initialValues, actions) {
    initialValues.id = nanoid(5)
    console.log(JSON.stringify(initialValues));
    actions.resetForm();
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
