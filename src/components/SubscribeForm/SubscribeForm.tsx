import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { Button } from "../common";

const SubscribeForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const handleSubmit = () => {
        console.log("submitted");
        console.log(name);
        console.log(email);
        setName("");
        setEmail("");
    };
    return (
        <>
            <form>
                <input
                    ref={nameRef}
                    type="text"
                    placeholder="full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    ref={emailRef}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="email"
                />
            </form>
            <Button cb={handleSubmit}>join</Button>
        </>
    );
};

export default SubscribeForm;
