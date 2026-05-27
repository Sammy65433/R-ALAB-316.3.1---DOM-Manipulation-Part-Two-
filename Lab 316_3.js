// R-ALAB 316.3.1 - DOM Manipulation (Part Two)

// Menu data structure
let menuLinks = [
  {
    text: "about",
    href: "/about",
  },

  {
    text: "catalog",
    href: "#",
    subLinks: [
      {
        text: "all",
        href: "/catalog/all",
      },

      {
        text: "top selling",
        href: "/catalog/top",
      },

      {
        text: "search",
        href: "/catalog/search",
      },
    ],
  },

  {
    text: "orders",
    href: "#",
    subLinks: [
      {
        text: "new",
        href: "/orders/new",
      },

      {
        text: "pending",
        href: "/orders/pending",
      },

      {
        text: "history",
        href: "/orders/history",
      },
    ],
  },

  {
    text: "account",
    href: "#",
    subLinks: [
      {
        text: "profile",
        href: "/account/profile",
      },

      {
        text: "sign out",
        href: "/account/signout",
      },
    ],
  },
];

// Step 1: Main content element
const mainEl = document.querySelector("main"); //find tag and remember it

mainEl.style.backgroundColor = "var(--main-bg)"; // paint background with Css var

//put a big heading inside <main>
mainEl.innerHTML = "<h1>R-ALAB 316.3.1 - DOM Manipulation (Part Two)</h1>";

//add the CSS class that centers its children (Lab316_3css.css)
mainEl.classList.add("flex-ctr");

// Step 2: Top menu nav bar

// find the <nav id="top‑menu"> element
const topMenuEl = document.querySelector("#top-menu");

// make the bar as tall as its container
topMenuEl.style.height = "100%";

// background colour comes from the CSS variable --top-menu-bg
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// add a flex‑box class that spreads its children evenly
topMenuEl.classList.add("flex-around");

// Step 3: Build menu links from data
menuLinks.forEach(link => {
  // loop over every object in the menuLinks array

  const a = document.createElement("a");
  a.href = link.href; // give the link its destination URL
  a.textContent = link.text;
  topMenuEl.appendChild(a); // stick the new <a> into the top‑menu bar
});

// Part 3

// Part 3: Creating the Submenu

// A submenu serves as an additional menu for users to select from,
// and offers more specific context to the top-level menu's options.
// We will start by using some DOM manipulation techniques to format
// the submenu before adding interaction to each menu component.

// All future steps should be completed within the index.js file.

// Select and cache the <nav id="sub-menu"> element in a variable named
// subMenuEl.
//Submenu Element
const subMenuEl = document.querySelector("#sub-menu");

// Set the height subMenuEl element to be "100%".

// subMenuEl.style.height = '50px';               // give it a visible height for testing
// subMenuEl.style.backgroundColor = '#ffebcd';
//height to fill its container
subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the
// --sub-menu-bg CSS custom property.
//background color defined in CSS property
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to the subMenuEl element.
//apply flex layout, that should exist in the stylesheet
subMenuEl.classList.add("flex-around");

// Throughout this process, note that you are also becoming accustomed
// to another important skill: working with another developer's code.
// Many of these variables, elements, CSS classes, and other features
// have already been developed, and you are simply working with them
// for your own purposes.

// Now, change the position of the submenu to temporarily hide it. Later,
// we will make the submenu appear dynamically based on user interaction:

// Set the CSS position property of subMenuEl to the value of absolute.
//hide the submenu
subMenuEl.style.position = "absolute";
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// Simple terms Samuel:
// Grab the submenu, style it like the top menu, then position it
// absolutely and place it at the top so it stays hidden until later.

// Part 4: Adding Menu Interaction

// In order to add submenu links, we will need to restructure the
// menuLinks array within index.js. Update the menuLinks array to the
// following:

// In order to add interaction:

// Select and cache the all of the <a> elements inside of topMenuEl
// in a variable named topMenuLinks.

const topMenuLinks = topMenuEl.querySelectorAll("a");

// Attach a delegated 'click' event listener to topMenuEl.
//Attach one click listener to the parent nav
topMenuEl.addEventListener("click", function (e) {
  // stop the link from doing its default behavior
  e.preventDefault();

  // if what was clicked is not an a ,stop here
  //ignore clicks that are not an <a> element
  if (e.target.tagName !== "A") {
    return; //Exit
  

  // The first line of code of the event listener function
  // should call the event object's preventDefault() method.

  // The second line of code of the function
  // should immediately return if the element
  // clicked was not an <a> element.

  // Log the content of the <a> to verify the handler is working.
  console.log(e.target.textContent);

  // Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs about,
  // catalog, etc. when a link is clicked. Clicking anywhere other than on a
  // link should do nothing.

  // Now that we have references to each of these links, and a registered
  // event listener, we will want to add a toggled "active" state to each
  // menu item, showing whether or not it is currently selected:

  // The event listener should add the active class to the <a> element that
  // was clicked, unless it was already active, in which case it should
  // remove it.

  // The event listener should remove the active class from each other <a>
  // element in topMenuLinks - whether the active class exists or not.

  // Hint: Removing a non-existent class from an element does not cause an
  // error!
  // remove active from every top menu link
  
    /* <a> already has the "active" class */
  
  if (e.target.classList.contains("active")) {


    e.target.classList.remove("active");
    // turn class off
    subMenuEl.style.top = "0"; // hide submenu
    subMenuEl.innerHTML = ""; // clear submenu
    return; //exit the handler - nothing else runs
  }

  // deactivate every top link, then activate clicked one 
  topMenuLinks.forEach(link => link.classList.remove("active"));
  // e.target.classList.add("active");


  //   // if clicked link was already active, remove it
  //   // otherwise add it
  e.target.classList.add("active");


// remove active class from every top menu link
// every <a> inside #top‑menu loses the active class.
//    will be re‑added later). */
for (const link of topMenuLinks) {
  link.classList.remove("active");
  
}
  // e.target.classList.add("active");


let linkObj = null; // will hold the matching entry

for (let i = 0; i < menuLinks.length; i++) {
  const entry = menuLinks[i]; // obj from the menuLinks
  if (entry.text === e.target.textContent) {
    linkObj = entry; // store the match
    break; // stop looping once found
  }
}}
//   //i could not get the siidebar to appear

// Part 5

// Within the same event listener, we want to toggle the submenu between
// active and non-active states. First, we will set the submenu to show or
// hide itself depending on the menu state:

// Within the event listener, if the clicked <a> element does not yet have
// a class of "active" (it was inactive when clicked):

// If the clicked <a> element's "link" object within menuLinks has a
// subLinks property (all do, except for the "link" object for ABOUT),
// set the CSS top property of subMenuEl to 100%.

// Otherwise, set the CSS top property of subMenuEl to 0.

// Hint: Caching the "link" object will come in handy for passing its
// subLinks array later.

// Progress Check - Ensure that clicking CATALOG, ORDERS, etc. shows
// the submenu bar, and that clicking them again hides it. Clicking
// ABOUT should not show the submenu bar.

// The submenu needs to be dynamic based on the clicked link. To facilitate
// that, we will create a helper function called buildSubmenu that does
// the following:

// Clear the current contents of subMenuEl.

// Iterate over the subLinks array, passed as an argument, and for each
// "link" object:

// Create an <a> element.

// Add an href attribute to the <a>, with the value set by the href
// property of the "link" object.

// Set the element's content to the value of the text property of the
// "link" object.

// Append the new element to the subMenuEl.

// Once you have created your helper function, include it in the event
// listener within the same logic that shows the submenu, remembering to
// pass the array of sub-links as an argument.

// Progress Check - Here is what the page should look like so far

// topMenuEl.addEventListener('click', e => {
//     e.preventDefault(); // stop the nav
// })

// //ignore clicks that are not <a>
// if (e.target.tagName !== 'A')
//     return;
// console.log(e.target.textContent);  //
})
