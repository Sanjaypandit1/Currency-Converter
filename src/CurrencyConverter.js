import React, { useState } from "react";
import axios from "axios";
import { countryFlags } from "./countryFlags";


const CurrencyConverter = () => {
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("EUR");
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(null);
    const [error, setError] = useState(null);

    const handleConvert = async () => {
        try {
            const response = await axios.get(`http://localhost:5001/convert?from=${from}&to=${to}&amount=${amount}`);
            if (response.data && response.data.convertedAmount !== undefined) {
                setConvertedAmount(response.data.convertedAmount.toFixed(2));
                setError(null);
            } else {
                setError("Error: Invalid conversion data received.");
            }
        } catch (error) {
            console.error("Error converting currency", error);
            setError("Error occurred while converting currency");
        }
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.header}>Currency Converter</h2>
            <div style={styles.row}>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    style={styles.input} 
                />
                <select value={from} onChange={(e) => setFrom(e.target.value)} style={styles.select}>
                    {Object.keys(countryFlags).map((currency) => (
                        <option key={currency} value={currency}>
                            {countryFlags[currency]} {currency}
                        </option>
                    ))}
                </select>
                <span style={styles.toText}>➡️</span>
                <select value={to} onChange={(e) => setTo(e.target.value)} style={styles.select}>
                    {Object.keys(countryFlags).map((currency) => (
                        <option key={currency} value={currency}>
                            {countryFlags[currency]} {currency}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleConvert} style={styles.button}>Convert</button>
            {error && <p style={styles.error}>{error}</p>}
            {convertedAmount && <h3 style={styles.result}>Converted Amount: {convertedAmount} {to}</h3>}
        </div>
    );
};

const styles = {
    container: {
        maxWidth: "500px",  
        margin: "auto",
        padding: "40px",    
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.1)",  
    },
    header: {
        textAlign: "center", 
        fontSize: "32px",    
        fontWeight: "bold",
        marginBottom: "30px", 
    },
    row: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "15px",  
        marginBottom: "25px" 
    },
    input: {
        width: "100px",       
        padding: "10px",       
        border: "1px solid #ccc",
        borderRadius: "8px",   
        textAlign: "center",
        fontSize: "20px"       
    },
    select: {
        padding: "10px",       
        border: "1px solid #ccc",
        borderRadius: "8px",   
        fontSize: "20px",      
        cursor: "pointer"
    },
    toText: {
        fontSize: "30px"     
    },
    button: {
        padding: "15px 30px",  
        fontSize: "20px",      
        cursor: "pointer",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "8px",   
    },
    error: {
        color: "red",
        marginTop: "20px",   
        fontSize: "18px"      
    },
    result: {
        color: "#333",
        marginTop: "20px",     
        fontSize: "22px"       
    }
};


export default CurrencyConverter;
