const mainDiv = document.querySelector('#content');

// lazy html text instead of creating a ton of consts
const myHtml = `
<h1>Restaurant</h1>

<div class="tab">
  <button class="tabLinks" onclick="openTab(event, 'Menu')">Menu</button>
  <button class="tabLinks" onclick="openTab(event, 'Contact')">Contact</button>
  <button class="tabLinks" onclick="openTab(event, 'About')">About</button>
</div>

<div id="Menu" class="tabContent">
  <h3>Menu</h3>
  <p>Fill in menu items below</p>
</div>

<div id="Contact" class="tabContent">
  <h3>Contact</h3>
  <p>Add fake contact info below</p>
</div>

<div id="About" class="tabContent">
  <h3>About Us</h3>
  <p>Add about us info below</p>
</div>
`;

// parse html text and add to div
const myFrag = document.createRange().createContextualFragment(myHtml);

mainDiv.appendChild(myFrag);

function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
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
