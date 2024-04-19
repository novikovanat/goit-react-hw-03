export default function Contact({ id, name, phoneNumber }) {
  return (
    <li key={id}>
      <p>
        {name}
      </p>
      <p>{phoneNumber}</p>
      <button>Delete</button>
    </li>
  );
}
