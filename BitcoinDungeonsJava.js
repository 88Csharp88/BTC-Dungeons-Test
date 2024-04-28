function checkBalance() {
    const walletAddress = document.getElementById("walletAddress").value;
    const apiUrl = `https://blockchain.info/rawaddr/${walletAddress}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const balance = data.final_balance / 100000000; // Convert Satoshi to BTC
            document.getElementById("balance").textContent = `Balance: ${balance} BTC`;
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("balance").textContent = "Error fetching balance. Please check the wallet address.";
        });
}
