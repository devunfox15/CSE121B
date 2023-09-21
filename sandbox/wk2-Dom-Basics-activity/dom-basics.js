const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

// creates the new header and paragrah
const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p>Welcome to Javascript Language</p>";
document.body.appendChild(newSection);