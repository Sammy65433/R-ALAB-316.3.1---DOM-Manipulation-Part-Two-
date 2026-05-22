// R-ALAB 316.3.1 - DOM Manipulation (Part Two)

// Menu data structure
let menuLinks = [{
        text: "about",
        href: "/about",
    },

    {
        text: "catalog",
        href: "#",
        subLinks: [{
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
        subLinks: [{
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
        subLinks: [{
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
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>R-ALAB 316.3.1 - DOM Manipulation (Part Two)</h1>";
mainEl.classList.add("flex-ctr");

// Step 2: Top menu nav bar
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

// Step 3: Build menu links from data
menuLinks.forEach(function (link) {
    const a = document.createElement("a");
    a.setAttribute("href", link.href);
    a.textContent = link.text;
    topMenuEl.appendChild(a);
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

const subMenuEl = document.querySelector("#sub-menu");

// Set the height subMenuEl element to be "100%".

subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value stored in the
// --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// Throughout this process, note that you are also becoming accustomed
// to another important skill: working with another developer's code.
// Many of these variables, elements, CSS classes, and other features
// have already been developed, and you are simply working with them
// for your own purposes.

// Now, change the position of the submenu to temporarily hide it. Later,
// we will make the submenu appear dynamically based on user interaction:

// Set the CSS position property of subMenuEl to the value of absolute.
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
topMenuEl.addEventListener("click", function (e) {
// stop the link from doing its default behavior
  e.preventDefault();

// if what was clicked is not an a ,stop here
  if (e.target.tagName !== "A") {
return;
  }


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

// Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:

// The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.

// The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.

// Hint: Removing a non-existent class from an element does not cause an error!
// remove active from every top menu link
//   topMenuLinks.forEach(function (link) {
//     if (link !== e.target) {
//       link.classList.remove('active');
//     }
//   });

//   // if clicked link was already active, remove it
//   // otherwise add it
//   e.target.classList.toggle('active');
// });
})