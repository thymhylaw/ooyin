 
        function convertCurrency() {
            const usd = parseFloat(document.getElementById("usd").value);
            const rate = parseFloat(document.getElementById("rate").value);
            const result = document.getElementById("result");

            if (isNaN(usd) || isNaN(rate) || usd < 0 || rate <= 0) {
                result.textContent = "Please enter valid values.";
                return;
            }

            const ngn = usd * rate;

            result.textContent =
                `$${usd.toFixed(2)} = ₦${ngn.toLocaleString("en-NG", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                })}`;
        }
    