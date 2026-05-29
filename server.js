const express = require("express");
const axios = require("axios");

const app = express();

app.get("/numbers", async (req, res) => {
 let urls = req.query.url;

 // Handle missing URL param
 if (!urls) {
 return res.status(400).json({ message: "No URLs provided" });
 }

 // Normalize to array — single ?url= comes as string, multiple comes as array
 if (!Array.isArray(urls)) {
 urls = [urls];
 }

 // Fetch all URLs in parallel, each with 500ms timeout
 const promises = urls.map(async (url) => {
 try {
 const response = await axios.get(url, { timeout: 500 });
 const nums = response.data.numbers;
 // Guard against malformed responses
 return Array.isArray(nums) ? nums : [];
 } catch (err) {
 // Timeout or bad URL — silently skip, log for debugging
 console.error(`Failed to fetch ${url}:`, err.message);
 return [];
 }
 });

 const results = await Promise.all(promises);

 // Flatten all arrays, remove duplicates, sort ascending
 const merged = [...newSet(results.flat())].sort((a, b) => a - b);

 return res.json({ numbers: merged });
});

app.listen(8008, () => {
 console.log("Server running on port 8008");
});