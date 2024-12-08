document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const size = document.getElementById("size").value;
    const flavor = document.getElementById("flavor").value;
    const name = document.getElementById("name").value;

    const message = `Thank you, ${name}! Your ${size} ${flavor} popcorn order has been placed. Please collect and pay at the shop.`;

    document.getElementById("confirmationMessage").innerText = message;
    document.getElementById("confirmationMessage").classList.remove("hidden");
    document.getElementById("orderForm").reset();
});
