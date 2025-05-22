"use client";
import { useEffect, useState, useRef } from "react";
let index = 0;

export default function TypingName() {
    const fullName = "ALTIN DEMKU";
    const [typedName, setTypedName] = useState("");
    const typing = useRef(false);

    function handleNameChange() {
        if(index < fullName.length) {
            index++;
            setTypedName(fullName.slice(0, index));
        }
    }

    useEffect(() => {
        setTimeout(handleNameChange, 200);
    }, [typedName]);

    useEffect(() => {
        if(typing.triggered === false) handleNameChange();
        typing.triggered = true
    }, []);


    return (
        <div className="text-4xl md:text-5xl font-bold text-center md:text-left w-full md:w-auto">
            {typedName}
        </div>
    );
}
