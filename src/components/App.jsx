import { useState } from "react";
import ContactForm from "./contactForm/ContactForm";
import SearchBox from "./searchBox/SearchBox";
import ContactList from "./contactList/ContactList";
import testData from "./testData.json"

const App = () => {
const [searchFilter, setSearchFilter] = useState(0)

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default App;
