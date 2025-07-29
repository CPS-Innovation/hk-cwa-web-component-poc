import  ReactDOM  from 'react-dom/client';

import { LinkButtonComponent } from "./LinkButtonComponent";
import styles from "./LinkButton.module.scss?inline";

class LinkButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const style = document.createElement("style");
    style.textContent = styles;
    this.shadowRoot!.appendChild(style);
    
		// const textContent = document.querySelector('#h1-link-button-component')?.innerHTML as string;
		// console.log(textContent)

		const textContent = this.getAttribute('text') as string;

    const root = ReactDOM.createRoot(this.shadowRoot!);
    root.render(<LinkButtonComponent text={textContent}/>)
	}
}

if (!window.customElements.get('link-button')) {
	console.log('con')
  window.customElements.define('link-button', LinkButton);
}

export default LinkButton
