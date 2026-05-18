import { useState } from 'react';
import { foods, filterItems } from './foodData.js';

export default function FilterableList() {

    const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  const results = filterItems(foods, query)


  return (
    <>
      <SearchBar query={query} onChange={handleChange}/>
      <hr />
      <List items={results} />
    </>
  );
}

function SearchBar(props) {
  

  return (
    <label>
      Search:{' '}
      <input
        value={props.query}
        onChange={props.onChange}
      />
    </label>
  );
}

function List({ items }) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
