import { useState } from "react";

function Greeting() {
    const [name, setName] = useState("");

    return (
        <section className="card">
            <h2>Greeting · state + onChange</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name..."
            />
            <p>Hello, {name || "stranger"}! 👋</p>
        </section>
    );
}

export default Greeting;