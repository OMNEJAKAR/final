import React, { useState } from "react";
import Header from "./Home/Header";
import Footer from "./Home/Footer";

export default function AboutUs() {
    const [name, setName] = useState("");

    function handleChange(event) {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Sending data to the server
        const response = await fetch("http://localhost:5000/aboutus/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify( {name} ), // Sending the name state to the server
        });

        if (response.ok) {
            console.log("Name added successfully");
        } else {
            console.error("Failed to add name");
        }
        setName(""); // Clear the input field
    };
    
    return (
        <div>
            <Header />
            <h1>Hello</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter name"
                    onChange={handleChange}
                    value={name}
                />
                <button type="submit">Add</button>
            </form>
            <Footer />
        </div>
    );
}
