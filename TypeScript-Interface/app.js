var Account = {
    name: '',
    amount: 0,
    acc_no: 0,
    insert: function (n, amt, acc_no) {
        this.name = n;
        this.amount = amt;
        this.acc_no = acc_no;
    },
    deposit: function (amt) {
        this.amount = this.amount + amt;
    },
    withDraw: function (amt) {
        if (this.amount < amt) {
            return "Insufficient Balance";
        }
        else {
            this.amount = this.amount - amt;
            return amt;
        }
    },
    checkBalance: function () {
        return this.amount;
    },
    display: function () {
        return "Acc_No : " + this.acc_no + " Name : " + this.name + " Amount = " + this.amount;
    }
};
Account.insert('abc', 10000, 101);
Account.deposit(5000);
Account.withDraw(15000);
Account.deposit(50000);
Account.deposit(4000);
console.log(Account.display());
console.log(Account.checkBalance());
