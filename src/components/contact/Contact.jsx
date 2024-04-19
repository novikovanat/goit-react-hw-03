export default function Contact({ id, name, phoneNumber, onDelete }) {
  return (
    <li key={id}>
      <p>
        {name}
      </p>
      <p>{phoneNumber}</p>
      <button onClick={()=>onDelete(id)}>Delete</button>
    </li>
  );
}
