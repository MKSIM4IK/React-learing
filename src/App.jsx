import Person from './components/Person.jsx';
import Tel from './components/Tel.jsx';

const persons = [
  {
    name: 'John Doe',
    tel: '123-456-7890',
    city: 'New York'
  },
  {
    name: 'Jane Smith',
    tel: '987-654-3210',
    city: 'Los Angeles'
  }
];

function App() {
  return (
    <div>
      <h1>Person Directory</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Telephone</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person, index) => (
            <tr key={index}>
              <td><Person name={person.name} /></td>
              <td><Tel tel={person.tel} /></td>
              <td>{person.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;