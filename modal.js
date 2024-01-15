class ModalNewsletter extends HTMLElement {
    constructor () {
    super();
    this.innerHTML =
		`	<p>Hi there!</p>`;

	}
}

if ('customElements' in window) {
	customElements.define('modal-newsletter', ModalNewsletter);
}