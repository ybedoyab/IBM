    
    function performOperation() {
        // Get user input from input fields
        let num1 = parseInt(document.getElementById('input1').value);
        let num2 = parseInt(document.getElementById('input2').value);
        // Check if inputs are valid numbers
        if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
                        let multiplication = multiply(num1, num2);
                        let division = divide(num1, num2);
                        let addition = add(num1, num2);
                        // Display the result
                        displayResult(multiplication, division, addition);
                    } else {
                        displayResult('Please enter valid numbers');
                    }
                }
    
                function multiply(a, b) {
                    return a * b;
                }

                function divide(a, b) {
                    return a / b;
                }

                function add(a, b) {
                    return a + b;
                }
    
                function displayResult(multiplication, division, addition) {
                    // Display the result in the paragraph element
                    const multiplicationn = document.getElementById('multiplication');
                    const divisionn = document.getElementById('division');
                    const additionn = document.getElementById('addition');

                    multiplicationn.textContent = `The multiplication is: ${multiplication}`;
                    divisionn.textContent = `The division is: ${division}`;
                    additionn.textContent = `The addition is: ${addition}`;

                }
            