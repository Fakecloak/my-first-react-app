import { getImageUrl } from './utils.js';

const ratio = window.devicePixelRatio;

function Avatar({ person, size }) {
    let thumbnail = 's';
    if (size * ratio > 90) {
        thumbnail = 'b';
    }

    return (
        <img
            className="avatar"
            src={getImageUrl(person, thumbnail)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

function Card({ children, title }) {
    return (
        <div className="card">
            <div className="card-content">
                <h1>{title}</h1>
                {children}
            </div>
        </div>
    );
}

export default function Profile() {
    return (
        <>
            <Avatar
                size={120}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />
            <Avatar
                size={180}
                person={{
                    name: 'Gregorio Y. Zara',
                    imageId: '7vQD0fP'
                }}
            />

            <div>
                <Card title="Photo">
                    <img
                        className="avatar"
                        src="https://react.dev/images/docs/scientists/OKS67lhm.jpg"
                        alt="Aklilu Lemma"
                        width={100}
                        height={100}
                    />
                </Card>
                <Card title="About">
                    <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
                </Card>
            </div>
        </>
    );
}
