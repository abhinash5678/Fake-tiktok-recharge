let selectedCoins = 0;

function selectPackage(coins) {
  selectedCoins = coins;
  document.getElementById("status").innerText = `${coins} coin package selected.`;
}

function startRecharge() {
  const username = document.getElementById("username").value.trim();

  if (!username) {
    document.getElementById("status").innerText = "Please enter a TikTok username.";
    return;
  }

  if (selectedCoins === 0) {
    document.getElementById("status").innerText = "Please select a coin package.";
    return;
  }

  // Simulate processing
  document.getElementById("status").innerText = "Processing...";
  
  setTimeout(() => {
    document.getElementById("status").innerText = `Success! ${selectedCoins} coins sent to @${username}`;
  }, 2000);
}
