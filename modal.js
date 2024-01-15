class ModalNewsletter extends HTMLElement {
    constructor () {
    super();
    this.innerHTML =
		`
    <section id="success-subscribe">
      <img />
      <h2>Thanks for subscribing!</h2>
      <p>
        A confirmation email has been sent to <em id='valueEmail'>email</em>.
        Please open it and click the button inside to confirm
        your subscription
      </p>
      <button onclick="hideWindow()">Dismiss message</button>
    </section>
    `;

	}
}

if ('customElements' in window) {
	customElements.define('modal-newsletter', ModalNewsletter);
}

hideWindow = () => {
  let modal = document.getElementById('modal');
  let section = document.getElementById('main-page');
  modal.style.display = 'none';
  section.style.display = 'block';
}