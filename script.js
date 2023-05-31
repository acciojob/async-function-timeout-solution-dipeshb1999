// Get elements from the HTML
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const outputDiv = document.getElementById('output');
const btn = document.getElementById('btn');

// Add click event listener to the button
btn.addEventListener('click', showMessage);

// Async function to wait for a specified time before resolving with a message
async function delayedMessage(message, delay) {
  await new Promise(resolve => setTimeout(resolve, delay));
  return message;
}

// Function to show the message on the webpage after a delay
function showMessage() {
  const message = textInput.value;
  const delay = Number(delayInput.value);

  if (message && delay) {
    delayedMessage(message, delay)
      .then(result => {
        outputDiv.innerText = result;
      });
  } else {
    outputDiv.innerText = 'Please enter both message and delay.';
  }
}
