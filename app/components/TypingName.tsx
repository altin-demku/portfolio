"use client";
import { useEffect, useState } from "react";
let index = 0;

export default function TypingName() {
    const fullName = "ALTIN DEMKU";
    const [typedName, setTypedName] = useState("");

    function handleNameChange() {
        if(index < fullName.length) {
            index++;
            setTypedName(fullName.slice(0, index));
        }
    }

    useEffect(() => {
        setTimeout(handleNameChange, 500);
    }, [typedName]);

    useEffect(() => {
        handleNameChange();
    }, []);


    return (
        <div className="text-4xl md:text-5xl font-bold text-center md:text-left w-full md:w-auto">
            {typedName}
        </div>
    );
}
