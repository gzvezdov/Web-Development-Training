// document.body.children[1].children[0].href = "https://google.com";

// console.dir(document);

// alert();
// wiondow.alert();

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://yahoo.com";

anchorElement = document.querySelector("p a");
anchorElement.href = "https://google.com";

// ADD AN ELEMENT
// 1. Create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://gzvezdov.com";
newAnchorElement.textContent = "Visist my Site";
// 2. Get access to the parent element that should hold the new element.

let firstParagraph = document.querySelector("p");

// 3. Insert the new element into the parent element content.

firstParagraph.append(newAnchorElement);

//REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstH1Element;
firstH1Element = document.querySelector("h1");
//2. Remove it
// firstH1Element.parentElement.removeChild(firstH1Element) - foer older browsers
firstH1Element.remove();

//MOVE ELEMENTS AROUND

firstParagraph.parentElement.append(firstParagraph);

// innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = "Hi! This is <strong>important!</strong>";
