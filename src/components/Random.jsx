import { useState } from "react";

function Random() {
    const [value, setValue] = useState("No Number Generated Yet!");
    const [message, setMessage] = useState(false);

    const handleRandom = () => {
        setValue(Math.floor(Math.random() * 100) + 1);
        setMessage(true);
        setTimeout(() => {
            setMessage(false);
        }, 1500);
    };

    return (
        <section className="flex h-[60%] w-full flex-col items-center gap-8">
            <p className={`text-2xl font-semibold ${message ? "view" : ""}`}>
                Generated Random Number
            </p>
            <h1
                className={`text-3xl font-bold`}
            >
                {value}
            </h1>
            <button
                type="button"
                onClick={handleRandom}
                className="text-secondary bg-tertiary hover:border-secondary cursor-pointer rounded-lg border-2 border-transparent px-6 py-2 font-bold transition-all duration-300"
            >
                Get Value
            </button>
        </section>
    );
}

export default Random;
