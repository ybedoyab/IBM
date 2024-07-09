let groceryItem1;
let groceryItem2;
let groceryItem3;

function calculateTotal() {
    groceryItem1 = parseFloat(document.getElementById('groceryItem1').value);
    groceryItem2 = parseFloat(document.getElementById('groceryItem2').value);
    groceryItem3 = parseFloat(document.getElementById('groceryItem3').value);

    let total = groceryItem1 + groceryItem2 + groceryItem3;
    document.getElementById('result').innerText = `The total cost of the groceries is: $${total}`;
}