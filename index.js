const state = {
    earnings: 0,
    expenses: 0,
    net: 0,
    transactions:[
        {
            id:5,
            Text: "Demo",
            amount: 500,
            type: "credit",
        },
        {
            id:5,
            Text: "Demo Debit",
            amount: 400,
            type: "debit",
        },
    ],
};


const transactioFormEl =document.getElementById("transactionForm");

const renderTransactions = () => {
    const transactionContainerEl = document.querySelector(".transactions");
    const netAmounntEl = document.getElementById("netAmount");
    const earningEl = document.getElementById("earning");
    const expenseEl = document.getElementById("expense");

const transactions = state.transactions;

let earning = 0;
let expense = 0;
let = net = 0;

transactionContainerEl.innerHTML = "";

transactions.forEach((transaction) => {
const {id, amount, text, type} = transaction;
const isCredit = type == "credit" ? true : false;
const sign = isCredit ? "+" : "-";

    const transactionEl = `<div class="transaction" id="${id}">
    <div class="left">
        <p> ${text}</p>
        <p>${sign} $ ${amount}</p>
    </div>
    <div class="status ${isCredit ? "credit" : "debit"}"> ${isCredit ? "C" : "D"}</div>
</div>`;

earning += isCredit ? amount : 0;
expense += !isCredit ? amount : 0;
net = earning - expense;

transactionContainerEl.insertAdjacentHTML("afterbegin", transactionEl);
});

netAmounntEl.innerHTML = `$ ${net}`;
earningEl.innerHTML = `$ ${earning}`;
expenseEl.innerHTML = `$ ${expense}`;

};


const addTransaction = (e) => {
    e.preventDefault();

    const isEarn = e.submitter.id == "earnBtn" ? true : false;             //check   ,turnery operator ka use kar rahe hai

// console.log(e)
// console.log(e.submitter.id);

const formData = new FormData(transactioFormEl);  
const tData = {};

formData.forEach((value, key) => {
    tData[key] = value;
});
// console.log("data", tData);

const {text, amount} = tData;
const transaction = {
    id: Math.floor(Math.random() * 1000),
    text: text,
    amount: +amount,
    type: isEarn ? "credit" : "debit",
};

state.transactions.push(transaction);

renderTransactions();

console.log("update value in state", state);

};

renderTransactions();
transactioFormEl.addEventListener("submit", addTransaction);