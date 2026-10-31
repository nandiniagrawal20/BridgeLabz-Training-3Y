// Creating an object
let user = {
    name: "Nandini",

    // Arrow function
    showName: () => {
        console.log(this.name);
    }
};

// Calling arrow function
user.showName();

// Fix using normal function
let user2 = {
    name: "Nandini",

    showName: function() {
        console.log(this.name);
    }
};

// Calling normal function
user2.showName();