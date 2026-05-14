import { getImageUrl } from "./utils.js";
import { people } from "./sci_data.js";

function ListItems({ title, people }) {
    return (
        <>
            <h2> {title} </h2>
            <ul>
                {people.map((person) => (
                    <li key={person.id}>
                        <img src={getImageUrl(person)} alt={person.name} width={100}
                            height={100} />
                        <p>
                            <b>{person.name}:</b>
                            {" " + person.profession + " "}
                            known for {person.accomplishment}
                        </p>
                    </li>
                ))}
                ;
            </ul>
        </>
    );
}

export default function List() {
    const Chemists = people.filter((person) => person.profession === "chemist");

    const Everyone_Else = people.filter(
        (person) => person.profession !== "chemist"
    );

    return (
        <article>
            <h1>Scientists</h1>
            <ListItems title="chemists" people={Chemists} />
            <ListItems title="Everyone Else" people={Everyone_Else} />
        </article>
    );
}