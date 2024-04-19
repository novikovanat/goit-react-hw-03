import { useState } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./contactForm/ContactForm";
import SearchBox from "./searchBox/SearchBox";
import ContactList from "./contactList/ContactList";
import testData from "./testData.json";

const App = () => {
  const [searchFilter, setSearchFilter] = useState("");
  const [userContacts, setUserContacts] = useState(testData);
 
  const shownContacts = userContacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchFilter.toLowerCase())
  );

  function handleSubmit(newContact, actions) {
    newContact.id = nanoid(5);
    setUserContacts((allContacts)=>[...allContacts, newContact]);
    actions.resetForm();
  }
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleSubmit={handleSubmit} />
      <SearchBox value={searchFilter} onSearch={setSearchFilter} />
      <ContactList contacts={shownContacts} />
    </div>
  );
};

export default App;
