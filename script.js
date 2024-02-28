document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const movie = document.getElementById("movie").value;
  const quantity = document.getElementById("quantity").value;
  const totalPrice = calculateTotalPrice(movie, quantity);
  document.getElementById("confirmation").innerText = `Booking confirmed for ${quantity} ticket(s) for ${movie}. Total Price: $${totalPrice}`;
});

function calculateTotalPrice(movie, quantity) {
  const ticketPrices = {
    avengers: 10,
    joker: 8,
    frozen: 7
  };
  return ticketPrices[movie] * quantity;
}
