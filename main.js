function showContent (page) {
  // Define our dynamic content to be displayed on navigation links
  const pagesContent = {
    home: 'Welcome to my website.',
    skills: 'I\'m a web developer working with JS.',
    portfolio: 'I made this personal website!',
    contacts: 'You can email me at me@email.com :-)'
  }

  // Check if our pagesContent Object actually contains the property
  // passed as parameter (page)
  if ( Object.keys(pagesContent).includes(page) ) {
    // Change our Content Container Text based on the page requested
    document.getElementById('content-container').innerText = pagesContent[page]

    // Remove any "active" class from all navbar links
    const navbarLinks = document.getElementsByClassName('navbar-link')
    for (var i = 0; i < navbarLinks.length; i++) {
      navbarLinks[i].classList.remove('active')
    }

    // Add the "active" class to the navbar link selected
    document.getElementById(page).classList.add('active')
  }
}

// Add Event Listener when the page has finished loading
document.addEventListener("DOMContentLoaded", function() {
  // Display the Home content when the website loads the first time
  showContent('home')
});
