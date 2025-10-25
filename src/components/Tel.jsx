export default function Tel({ tel }) {
  return <a href={`tel:${tel}`}>{tel}</a>;
}
