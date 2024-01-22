if (window.matchMedia("(min-width: 1024px)").matches) {
  modal.style.display = 'none';
}
btnState = () => {
  let emailInput = document.getElementById('email').value;
  let btn = document.getElementById('newsletter-btn');
    if (emailInput === '') {
      btn.disabled = true
    } else {
      btn.disabled = false
    }
 } 

receiveNewsletter = () => {
  let emailInputValue = document.getElementById('email').value;
  let modal = document.getElementById('modal');
  let section = document.getElementById('main-page');
  let mailValue = document.getElementById('valueEmail');
  modal.style.display = 'block';
  section.style.display = 'none';
  mailValue.innerText = emailInputValue;
  if (window.matchMedia("(min-width: 1024px)").matches) {
    modal.style.display = 'flex';
  }
}