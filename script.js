const inputContainer = document.getElementById("ph.no-label-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsContainer = document.getElementById("results");

// Check if the input string is valid or not
const checkValid = (str) => {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})(-|\s)?\d{3}(-|\s)?\d{4}$/;
  console.log(str, str.match(regex));
  return str.match(regex);
};

// Hear for click event on check button
checkBtn.addEventListener("click", () => {
  // Checking if the input is empty
  if (inputContainer.value == "") {
    alert("Please provide a phone number");
    return;
  }

  const str = inputContainer.value;

  // Creating dynamic 'p' element to store answers
  const childEle = document.createElement("p");
  // Getting the class list, which can be used to add classes
  const childEleClassList = childEle.classList;
  childEleClassList.add("results-p");
  let text = "";
  if (checkValid(str)) {
    text = `Valid US number:
    ${str}`;
    childEleClassList.add("valid-p");
  } else {
    text = `Invalid US number:
    ${str}`;
    childEleClassList.add("invalid-p");
  }

  // Attaching the answers as child elements in results div
  childEle.innerText = text;

  // Adding the child to parent element in DOM
  resultsContainer.appendChild(childEle);

  // Scroll the results div to bottom
  resultsContainer.scrollTop = resultsContainer.scrollHeight;

  // Clearing out the input element content
  inputContainer.value = "";
});

// Hear for clear button click event
clearBtn.addEventListener("click", () => {
  // Deleting all the content present in results div
  resultsContainer.innerHTML = "";
});
