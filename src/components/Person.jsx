import Tel from './Tel.jsx';

export default function Person({ name, tel, city }) {
  return (
    <>
      <h1>{name}</h1>
      <Tel tel={tel} />
      <p>{city}</p>
    </>
  );
}
