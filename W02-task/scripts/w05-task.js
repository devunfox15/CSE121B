// Step 1: Declare Global Variables
const templesElement = document.querySelector('#temples');
var templeList = [];

// Step 2: Function - displayTemples
const displayTemples = (templeList) => {
  templeList.forEach((temple) => {
    // Create a new <article> element
    const articleElement = document.createElement("article");

    // Create an <h3> element and add the temple's templeName property
    const h3Element = document.createElement("h3");
    h3Element.textContent = temple.templeName;

    // Create an <img> element and add the temple's imageUrl property to the src attribute
    // and the temple's location property to the alt attribute
    const imgElement = document.createElement("img");
    imgElement.src = temple.imageUrl;
    imgElement.alt = temple.location;

    // Append the <h3> and <img> elements to the <article> element
    articleElement.appendChild(h3Element);
    articleElement.appendChild(imgElement);

    // Append the <article> element to the global templesElement variable
    templesElement.appendChild(articleElement);
  });
};

// Step 3: Function - getTemples
const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  
  if (response.ok) {
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
  } else {
    console.error('Failed to fetch temple data');
  }
};

// Step 4: Function - reset
const reset = () => {
  const templesElement = document.getElementById("temples"); // Assuming you have this element

  // Remove all <article> elements inside the templesElement
  while (templesElement.firstChild) {
    templesElement.removeChild(templesElement.firstChild);
  }
};

// Step 5: Function - sortBy
const sortBy = (temples) => {
  reset(); // Clear the output

  const filter = document.getElementById("sortBy").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      const dateThreshold = new Date(1950, 0, 1);
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) < dateThreshold));
      break;
    case "all":
    default:
      displayTemples(temples);
      break;
  }
};

// Step 6: Event Listener - sortBy Element change
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(templeList);
});

// Step 7: Call getTemples to load the data
getTemples();