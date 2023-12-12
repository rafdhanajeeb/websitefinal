function scrollToAvaRooms() {
  // Scroll smoothly to the target section
  document
    .getElementById("availableRooms")
    .scrollIntoView({ behavior: "smooth" });
}

function roomDetails() {
  // Scroll smoothly to the target section
  document
    .getElementById("roomDetailsForm")
    .scrollIntoView({ behavior: "smooth" });
}

// function confirmBookAdventure() {
//   // Show a confirmation dialog
//   var isConfirmed = confirm("Are you sure you want to book this adventure?");

//   // If the user clicks "OK" in the confirmation dialog, proceed to the adventure booking
//   if (isConfirmed) {
//     bookAdventure();
//   }
// }

function confirmBookAdventure() {
  // Show the confirmation modal
  var modal = document.getElementById("confirmModal");
  modal.style.display = "block";

  // Set up event listeners for the buttons in the modal
  var confirmButton = document.getElementById("confirmButton");
  var cancelButton = document.getElementById("cancelButton");

  // If the user clicks "Confirm," proceed to the adventure booking
  confirmButton.onclick = function () {
    modal.style.display = "none";
    bookAdventure();
  };

  // If the user clicks "Cancel," close the modal
  cancelButton.onclick = function () {
    modal.style.display = "none";
  };
}

// Your existing bookAdventure function
function bookAdventure() {
  document.getElementById("cusdetails").scrollIntoView({ behavior: "smooth" });
  // Your existing code for booking adventure
}

// click on booknow
function confirmBooking() {
  // Show the confirmation modal
  var modal = document.getElementById("confirmModal2");
  modal.style.display = "block";

  // Set up event listeners for the buttons in the modal
  var confirmButton = document.getElementById("confirmButton2");
  var cancelButton = document.getElementById("cancelButton2");

  // If the user clicks "Confirm," proceed to the adventure booking
  confirmButton.onclick = function () {
    modal.style.display = "none";
    bookNow();
  };

  // If the user clicks "Cancel," close the modal
  cancelButton.onclick = function () {
    modal.style.display = "none";
  };
}

// Your existing bookAdventure function

function bookAdventure() {
  document.getElementById("cusdetails").scrollIntoView({ behavior: "smooth" });
  // Your existing code for booking adventure
}

function adventure() {
  // Scroll smoothly to the target section
  document.getElementById("adventures").scrollIntoView({ behavior: "smooth" });
}

// calculation for room

function submitRoomDetails() {
  // Get the selected room type
  var selectedRoom = document.getElementById("rooms").value;

  // Get the checkbox for kids above 5 years old
  var kidsCheckbox = document.getElementById("age");

  //   get the extra bed
  var bedCheckbox = document.getElementById("bed");

  // Set the base room rates
  var roomRates = {
    single: 25000,
    double: 35000,
    triple: 40000,
  };

  // Calculate the total room rate
  var totalRoomRate = roomRates[selectedRoom];

  // Add extra cost for kids above 5 years old if the checkbox is checked
  if (kidsCheckbox.checked) {
    totalRoomRate += 5000;
  }

  //   extrat cost for bed
  if (bedCheckbox.checked) {
    totalRoomRate += 8000;
  }

  // Display the total amount in the 'total' input field
  document.getElementById("total").value = totalRoomRate;
}

//invoice calcultion

function bookNow() {
  // Get customer details
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var phoneNumber = document.getElementById("phoneNumber").value;
  var address = document.getElementById("address").value;
  var isSriLankan = document.querySelector(
    'input[name="isSriLankan"]:checked'
  ).value;
  var needGuide = document.querySelector('input[name="guide"]:checked').value;

  var numAdults = parseInt(document.getElementById("numAdults").value) || 0;
  var numKids = parseInt(document.getElementById("numKids").value) || 0;
  var promocode = document.getElementById("promocode").value;
  var specialRequest = document.getElementById("specialRequest").value;

  // Calculate total payment
  var totalRoomRate = parseFloat(document.getElementById("total").value) || 0;

  // Assume you calculate these costs elsewhere
  var divingCost = calculateDivingCost(isSriLankan, numAdults, numKids);

  var guideCost = calculateGuideCost(needGuide, numAdults, numKids);
  var adCost = calculateAdventureCost(guideCost, divingCost);

  // Calculate additional costs based on nationality
  var adultCost = isSriLankan === "yes" ? 5000 : 10000;
  var kidCost = isSriLankan === "yes" ? 2000 : 5000;

  // Calculate total adventure cost
  var totalAdventureCost = numAdults * adultCost + numKids * kidCost;

  // Calculate total payment
  var totalPayment = totalRoomRate + adCost + guideCost + totalAdventureCost;

  // Apply promo code discount if applicable
  var promoDiscount = 0;
  if (promocode === "Promo123") {
    var discountPercentage = 0.05;
    promoDiscount = totalPayment * discountPercentage;
    totalPayment -= promoDiscount;
  }

  // Display invoice details
  document.getElementById("invoiceFullName").textContent = fullName;
  document.getElementById("invoiceEmail").textContent = email;
  document.getElementById("invoicePhoneNumber").textContent = phoneNumber;
  document.getElementById("invoiceAddress").textContent = address;
  document.getElementById("invoiceIsSriLankan").textContent = isSriLankan;
  document.getElementById("Noadult").value = numAdults;
  document.getElementById("Nokids").value = numKids;
  document.getElementById("invoiceSpecialRequest").textContent = specialRequest;
  document.getElementById("divingCost").value = divingCost;
  document.getElementById("guideCost").value = guideCost;
  document.getElementById("adCost").value = adCost;
  document.getElementById("roomCost").value = totalRoomRate;
  document.getElementById("promocode").value = promocode;
  document.getElementById("Final").value = totalPayment;
  document.getElementById("discount").value = promoDiscount;

  // Scroll to the invoice section
  document.getElementById("invoice").scrollIntoView({ behavior: "smooth" });
}

// Function to calculate diving cost
function calculateDivingCost(isSriLankan, numAdults, numKids) {
  var adultCost = isSriLankan === "yes" ? 5000 : 10000;
  var kidCost = isSriLankan === "yes" ? 2000 : 5000;
  return numAdults * adultCost + numKids * kidCost;
}

function calculateGuideCost(needGuide, numAdults, numKids) {
  var guideCost = 0;

  // If a guide is needed, add extra cost for both adults and kids
  if (needGuide === "yes") {
    guideCost = numAdults * 1000 + numKids * 500;
  }

  return guideCost;
}

function calculateAdventureCost(guideCost, divingCost) {
  // Implement your logic to calculate adventure cost
  return guideCost + divingCost;
}

// myfav
function addToFavourites(button) {
  // Get the card element
  var card = button.parentNode;

  // Clone the card and remove the button from the clone
  var clonedCard = card.cloneNode(true);
  var clonedButton = clonedCard.querySelector(".favorite-button");
  clonedButton.parentNode.removeChild(clonedButton);

  // Create a remove button
  var removeButton = document.createElement("span");
  removeButton.classList.add("remove-button");
  removeButton.innerHTML = " Remove";
  removeButton.onclick = function () {
    removeFromFavorites(this.parentNode);
  };

  // Append the remove button to the cloned card
  clonedCard.appendChild(removeButton);

  // Append the cloned card to the "My Favourite" section
  var myFavouriteSection = document.getElementById("myFavourite");
  myFavouriteSection.appendChild(clonedCard);
}

// Get or initialize the favorites array from local storage
var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

// Add the current card's HTML content to the favorites array
favorites.push(clonedCard.innerHTML);
// Save the updated favorites array back to local storage
localStorage.setItem("favorites", JSON.stringify(favorites));

window.onload = function () {
  // Get the favorites array from local storage
  var favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  // Get the "My Favourite" section
  var myFavouriteSection = document.getElementById("myFavourite");

  // Clear existing content in the "My Favourite" section
  myFavouriteSection.innerHTML = "";

  // Add each favorite item to the "My Favourite" section
  favorites.forEach(function (favoriteHTML) {
    var favoriteCard = document.createElement("div");
    favoriteCard.innerHTML = favoriteHTML;

    // Create a remove button for each favorite item
    var removeButton = document.createElement("span");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = " Remove";
    removeButton.onclick = function () {
      removeFromFavorites(favoriteCard);
    };

    favoriteCard.appendChild(removeButton);

    // Append the favorite item to the "My Favourite" section
    myFavouriteSection.appendChild(favoriteCard);
  });
};

function removeFromFavorites(card) {
  // Remove the selected card from the "My Favourite" section
  var myFavouriteSection = document.getElementById("myFavourite");
  myFavouriteSection.removeChild(card);
}
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("sidebar-hidden");
}

// loyalty
function checkLoyalty() {
  // Get the number of rooms from the "cusdetails" form
  var numRooms = parseInt(document.getElementById("numRooms").value) || 0;

  // Define the loyalty points per room
  var loyaltyPointsPerRoom = 20;

  // Calculate total loyalty points
  var totalLoyaltyPoints = numRooms > 3 ? numRooms * loyaltyPointsPerRoom : 0;

  // Store loyalty points in local storage
  localStorage.setItem("loyaltyPoints", totalLoyaltyPoints);

  // Display loyalty points 
  var loyaltyModal = document.getElementById("loyaltyModal");
  var loyaltyMessage = document.getElementById("loyaltyPointsMessage");

  loyaltyMessage.textContent =
    "You have earned " + totalLoyaltyPoints + " loyalty points!";
  loyaltyModal.style.display = "block";
}

function closeLoyaltyModal() {
  var loyaltyModal = document.getElementById("loyaltyModal");
  loyaltyModal.style.display = "none";
}
var storedLoyaltyPoints = localStorage.getItem("loyaltyPoints");
console.log("Stored Loyalty Points: " + storedLoyaltyPoints);


document.addEventListener('DOMContentLoaded', function() {
  const checkInDateField = document.getElementById('checkInDateField');
  const checkOutDateField = document.getElementById('checkOutDateField');

  const currentDate = new Date().toISOString().split('T')[0]; 
  checkInDateField.setAttribute('min', currentDate); 

  checkInDateField.addEventListener('change', function() {
    const selectedCheckInDate = checkInDateField.value;
    const nextDay = new Date(selectedCheckInDate);
    nextDay.setDate(nextDay.getDate() + 1); 

    const minCheckOutDate = nextDay.toISOString().split('T')[0]; 
    checkOutDateField.setAttribute('min', minCheckOutDate);
  });
});

