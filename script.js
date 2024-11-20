//LINK
function openMyLinkProfile(url) {
   window.open(url, '_blank');
   return false;
}

//NAV-MENU
const links = document.querySelectorAll('nav a');

function updateActiveLink(event) {
  links.forEach(link => {
    if (link === event.target) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // Check if scrolled to the top
  if (window.scrollY === 0) {
    const homeLink = document.querySelector('nav a[href="#home-header"]');
    homeLink.classList.add('active');
    links.forEach(link => {
      if (link !== homeLink) {
        link.classList.remove('active');
      }
    });
  }
}
links.forEach(link => {
  link.addEventListener('click', updateActiveLink);
});
window.addEventListener('scroll', updateActiveLink);


//GO-TO-TOP-BUTTON
const topButton = document.getElementById('topButton');
const topOfPage = document.getElementById('topOfPage');

function handleTopButtonClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
topButton.addEventListener('click', handleTopButtonClick);
function toggleTopButtonVisibility() {
  if (window.scrollY > 100) {
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
}
toggleTopButtonVisibility();
window.addEventListener('scroll', toggleTopButtonVisibility);


