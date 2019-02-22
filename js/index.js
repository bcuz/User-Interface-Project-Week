class TabLink {
  constructor(element) {
    
    // Assign this.element to the passed in DOM element
    this.element = element;
    
    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;    
    
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.topic-item[data-tab="${this.data}"]`);    
    
    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement)
    
    // Add a click event listener on this instance, calling the select method on click
    this.element.addEventListener('click', () => this.select()) 
  };

  select() {
    
    // Get all of the elements with the tabs-link class
    document.querySelectorAll('.topic-link')

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    .forEach(link => link.classList.remove('topic-link-selected'));

    // Add a class named "tabs-link-selected" to this link
    this.element.classList.add('topic-link-selected');
    
    // Call the select method on the item associated with this link
    this.tabItem.select()
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    this.element = element
    console.log(this.element);
    
  }

  select() {
    
    // Select all ".tabs-item" elements from the DOM
    document.querySelectorAll('.topic-item')
    
    // Remove the class "tabs-item-selected" from each element
    .forEach(link => link.classList.remove('topic-item-selected'));
    
    // Add a class named "tabs-item-selected" to this element
    this.element.classList.add('topic-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.topic-link')
.forEach(link => new TabLink(link))

let homePage = ["/index.html", "/"]

function openNav() {
  document.getElementById("myNav").style.width = "100%";
  document.querySelector("header").style.zIndex = "0";
  document.querySelector("header").style.position = "static";

  if (homePage.includes(window.location.pathname)) {
    document.querySelector(".jumbotron").style.marginTop = "-56px";
  } else {
    document.querySelector(".jumbo-service").style.marginTop = "-56px";
  }

}

  /* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  document.querySelector("header").style.zIndex = "1";
  document.querySelector("header").style.position = "fixed";
  if (homePage.includes(window.location.pathname)) {
    document.querySelector(".jumbotron").style.marginTop = "0px";
  } else {
    document.querySelector(".jumbo-service").style.marginTop = "0px";
  }
}

document.addEventListener('keydown', event => {
  if (event.keyCode == 69) {
    closeNav()
  } else if (event.keyCode == 79) {
    openNav()
  }
})