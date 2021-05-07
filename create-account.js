function createAccount(pin, amount = 0) {
  return {
    checkBalance(userPin) {
      return userPin === pin ? `$${amount}` : "Invalid PIN.";
    },
    deposit(userPin, depositAm) {
      if (userPin === pin) {
        // amount += depositAm;
        return `Succesfully deposited $${depositAm}. Current balance: $${(amount += depositAm)}.`;
      }
      return "Invalid PIN.";
    },
    withdraw(userPin, withdrawAm) {
      if (userPin === pin) {
        let result = (amount -= withdrawAm);
        if (result >= 0) {
          return `Succesfully withdrew $${withdrawAm}. Current balance: $${result}.`;
        } else {
          return `Withdrawal amount exceeds account balance. Transaction cancelled.`;
        }
      }
      return "Invalid PIN.";
    },

    changePin(oldPin, newPin) {
      if (oldPin === pin) {
        pin = newPin;
        return "PIN successfully changed!";
      }
      return "Invalid PIN.";
    },
  };
}

module.exports = { createAccount };
