export default function Contact({ id, name, phoneNumber }) {
  return (
    <li key={id}>
      <p>
        {name[0]} {name[1]}
      </p>
      <p>{phoneNumber}</p>
      <button>Delete</button>
    </li>
  );
}
