import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "now" },
        { name: "description", content: "what i've been doing lately!" },
    ];
};

export default function Now() {
    return (
        <div>
            <h1>nowadays</h1>
        </div>
    )
}
