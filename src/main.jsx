import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

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

const Tel = (props) => <a href={`tel:${props.tel}`}>{props.tel}</a>;

const element = (
  <>
    <h1>{person.name}</h1>
    <Tel tel={NewPerson.tel} />
    <p>{person.city}</p>
  </>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {element}
  </StrictMode>
);
