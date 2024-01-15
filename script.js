 test = () => {
  let emailInput = document.getElementById('email').value;
  let btn = document.getElementById('newsletter-btn');
    if (emailInput === '') {
      btn.disabled = true
    } else {
      btn.disabled = false
    }
 } 



receiveNewsletter = () => {
  console.log('email ok');
}