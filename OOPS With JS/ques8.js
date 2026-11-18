class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

// Prototype method
MovieTicket.prototype.printTicket = function() {
    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Price:", this.price);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

// Creating OnlineTicket object
let ticket1 = new OnlineTicket("Avengers", "A12", 250, 30);

ticket1.printTicket();

console.log("Convenience Fee:", ticket1.convenienceFee);
console.log("Total Amount:", ticket1.getTotalAmount());