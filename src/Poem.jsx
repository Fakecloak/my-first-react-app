const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

export default function Poem() {
    return (
        <article>
            {poem.lines.map((line, index) =>
                <fragment key={index}>
                    {index > 0 && <hr />} 
                    <p>{line}</p>
                </fragment>)}
        </article>
    );
}