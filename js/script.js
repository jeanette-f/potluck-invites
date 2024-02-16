// invite button
const addGuestButton = document.querySelector(".invite");
// label for the invite button
const guestInputLabel = document.querySelector(".add-guest label");
// text input box
const guestInput = document.querySelector(".add-guest input");
// unordered list (not yet visible)
const guestList = document.querySelector(".guest-list");
// span class for number of guests attending
const guestCount = document.querySelector(".attendance");
// alert when guest list is full (not yet visible)
const guestFull = document.querySelector(".alert");
// assign dishes button
const assignButton = document.querySelector(".assign");
//assigned items list
const assignedItems = document.querySelector(".assigned-items");

//event listener for adding names to invite list
addGuestButton.addEventListener ("click", function () {
    const guest = guestInput.value;   
        // if not blank, add to list
        if (guest !== "") {
            addToList(guest);
            updateGuestCount();
            clearInput();
        }
   });

    const clearInput = function () {
        guestInput.value = "";
    };

    const addToList = function (guest) {
        const listItem = document.createElement ("li");
        listItem.innerText = guest;
        guestList.append (listItem);
    }

    const updateGuestCount = function () {
        const guests = document.querySelectorAll(".guest-list li");
        guestCount.innerText = guests.length;
        
            if (guests.length === 8) {
                addGuestButton.classList.add ("hide");
                guestInput.classList.add ("hide");
                guestInputLabel.classList.add ("hide");
                guestFull.classList.remove ("hide");
            }
    };

//to assign dishes to guests on the list
const assignItems = function() {
    let potluckItems = [
        "Deviled Eggs",
        "Crab Dip",
        "Meat and Cheese platter",
        "Caeser Salad",
        "Pasta Salad",
        "Mashed Potatoes",
        "Green Bean Casserole", 
        "Ham",
        "Pie",
        "Brownies",
        "Ice Cream",
        "Soda (and cups)",
        "Paper Plates"
    ];


    const allGuests = document.querySelectorAll (".guest-list li");

    for (let guest of allGuests) {
        let randomPotluckIndex = Math.floor(Math.random() * potluckItems.length);
        let randomPotluckItem = potluckItems[randomPotluckIndex]; 
        
        let listItem = document.createElement("li");
        listItem.innerText = `${guest.innerText} is bringing ${randomPotluckItem}.`;
        assignedItems.append(listItem);

        potluckItems.splice(randomPotluckIndex, 1);
    };
};
assignButton.addEventListener("click", function () {
    assignItems();
    assignButton.disabled = true;
});