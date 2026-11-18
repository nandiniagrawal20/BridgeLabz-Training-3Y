class BankAccount {
    #balance;

    constructor(balance) {
        this.#balance = balance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive!");
        }

        this.#balance += amount;
        console.log("Deposit successful:", amount);
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive!");
        }

        if (amount > this.#balance) {
            throw new Error("Insufficient balance!");
        }

        this.#balance -= amount;
        console.log("Withdrawal successful:", amount);
    }

    getBalance() {
        return this.#balance;
    }
}

// Creating account
let account = new BankAccount(5000);

// Valid deposit
account.deposit(2000);

// Valid withdrawal
account.withdraw(1000);

// Invalid withdrawal
try {
    account.withdraw(10000);
} catch (error) {
    console.log("Error:", error.message);
}

console.log("Final Balance:", account.getBalance());