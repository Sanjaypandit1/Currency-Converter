require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.FIXER_API_KEY;
const BASE_URL = "http://data.fixer.io/api/latest";

app.get("/convert", async (req, res) => {
    try {
        const { from, to, amount } = req.query;

        if (!from || !to || !amount) {
            return res.status(400).json({ error: "Missing required parameters" });
        }

        // Fetch exchange rates from Fixer.io
        const response = await axios.get(BASE_URL, {
            params: { access_key: API_KEY }
        });

        if (!response.data.success) {
            return res.status(500).json({ error: "Failed to fetch exchange rates" });
        }

        const rates = response.data.rates;

        if (!rates[from] || !rates[to]) {
            return res.status(400).json({ error: "Invalid currency codes" });
        }

        // Convert the amount using the rates
        const convertedAmount = (amount / rates[from]) * rates[to];

        res.json({ convertedAmount });
    } catch (error) {
        console.error("Error during conversion:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
