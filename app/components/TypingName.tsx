"use client";

import { useEffect, useState } from "react";

export default function TypingName() {
    const fullName = "ALTIN DEMKU";
    const [typedName, setTypedName] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullName.length) {
            const timeout = setTimeout(() => {
                setTypedName((prev) => prev + fullName[index]);
                setIndex(index + 1);
            }, 150); // Adjust speed here
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <div className="text-4xl md:text-5xl font-bold text-center md:text-left w-full md:w-auto">
            {typedName}
        </div>
    );
}
