export default function SearchBox({ value, onSearch }) {
  return (
    <label>
      Find contacts by name
      <input name="search" value={value} onInput={(event)=>onSearch(event.target.value)}></input>
    </label>
  );
}
