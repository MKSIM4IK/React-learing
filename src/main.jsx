import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Person from './components/Person.jsx';

const person = {
  name: 'John Doe',
  tel: '123-456-7890',
  city: 'New York'
};

const NewPerson = {
  name: 'Jane Smith',
  tel: '987-654-3210',
  city: 'Los Angeles'
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Person {...NewPerson} />
  </StrictMode>
);
