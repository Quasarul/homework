document.body.innerHTML = "<div class='container'></div>";
// Get dom element
function getElement(element) {
  return document.querySelector(element);
}

// Create a new dom element
function createElement(
  elementType,
  elementText,
  elementStyle,
  hasChildrenElements
) {
  const element = document.createElement(elementType);
  const textnode = document.createTextNode(elementText);
  element.appendChild(textnode);
  element.style = elementStyle;

  if (hasChildrenElements) {
    h1 = document.createElement("h1");
    h1.textContent = "I'm in a div";
    p = document.createElement("p");
    p.textContent = "ME TOO!";
    element.appendChild(h1);
    element.appendChild(p);
  }

  return element;
}

//function removeElement(element) {
//  const removedElement = getElement(element);
//  return removedElement.remove();
//}

function addElemToDOM() {
  // - a <p> with red text that says "Hey I'm red!"
  getElement(".container").appendChild(
    createElement("p", "Hey I'm red!", "color:red", false)
  );
  // - an <h3> with blue text that says "I'm a blue h3!"
  getElement(".container").appendChild(
    createElement("h3", "Hey I'm blue!", "color:blue", false)
  );
  // - a <div> with a black border and pink background
  getElement(".container").appendChild(
    createElement("div", "Me before", "", false)
  );
  getElement(".container").appendChild(
    createElement("div", "", "border:1px solid black; background:pink", true)
  );
  // - remove the blue h3 element
  //removeElement("h3");
}

addElemToDOM();
