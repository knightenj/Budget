let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

//Weekly Expense For Loop
for (let i = 0; i < weeklyExpensesQuestions.length; i++){
    let stringAnswer = window.prompt(weeklyExpensesQuestions[i]);
    let numberAnswer = parseFloat (stringAnswer)
    weeklyExpenses = weeklyExpenses + numberAnswer;
}

// Your Code Here