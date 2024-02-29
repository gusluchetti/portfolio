import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "barebones luchetti.dev" },
        { name: "description", content: "testing things out! don't mind me." },
    ];
};

export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1>fly.io deploy test</h1>
            <p>hopefully this goes well!</p>
        </div>
    );
}
