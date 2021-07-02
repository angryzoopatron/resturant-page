const mainDiv = document.querySelector('#content');

// lazy html strings instead of creating a ton of messy consts
const myHtml = `
<h1>Click a tab below to navigate</h1>
<div class="tab">
  <button class="tabLinks" onclick="openTab(event, 'Menu')">Menu</button>
  <button class="tabLinks" onclick="openTab(event, 'Contact')">Contact</button>
  <button class="tabLinks" onclick="openTab(event, 'About')">About</button>
</div>

<div id="Menu" class="tabContent">
  <h3>Menu</h3>
  <img src="https://picsum.photos/200">
</div>

<div id="Contact" class="tabContent">
  <h3>Contact</h3>
  <img src="https://picsum.photos/200?blur">
</div>

<div id="About" class="tabContent">
  <h3>About Us</h3>
  <img src="https://picsum.photos/200?grayscale">
</div>

<footer>
  <p>Test feet</p>
  <img id="pizza" src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg">
</footer>
`;

// parse html text and add to div
const myFrag = document.createRange().createContextualFragment(myHtml);

mainDiv.appendChild(myFrag);

function openTab(evt, tabName) {
    let i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// add background images, food images & titles, and superfluous about & contact info
