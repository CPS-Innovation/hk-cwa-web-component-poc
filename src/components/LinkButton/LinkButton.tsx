import ReactDOM from "react-dom/client";
import HelpIcon from "../svgs/help.svg?react";

import { LinkButtonComponent } from "./LinkButtonComponent";
import styles from "./LinkButton.module.scss?inline";
import type { Ref } from "react";

class LinkButton extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	connectedCallback() {
		const style = document.createElement("style");
		style.textContent = styles;
		this.shadowRoot!.appendChild(style);

		const textContent = this.getAttribute("text") as string;
		const type = this.getAttribute("type") as "button" | "submit" | "reset";
		const dataTestId = this.getAttribute("dataTestId") as string;
		const ariaLabel = this.getAttribute("ariaLabel");
		const ariaExpanded = this.getAttribute("buttonOpen");
		const guidanceBtnRef = this.getAttribute(
			"ref"
		) as Ref<HTMLButtonElement | null>;
		const className = this.getAttribute("className") as string;

		const root = ReactDOM.createRoot(this.shadowRoot!);
		root.render(
			<LinkButtonComponent
				text={textContent}
				type={type}
				dataTestId={dataTestId}
				ref={guidanceBtnRef}
				ariaLabel={ariaLabel}
				ariaExpanded={ariaExpanded}
				className={`${styles}.${className}`}
				onClick={() => {
					// alert('1')
					// setButtonOpen((buttonOpen) => !buttonOpen);
				}}
			>
				<HelpIcon className={"classes.helpIcon"} />
				<h3>children of linkbutton</h3>
			</LinkButtonComponent>
		);
	}
}

if (!window.customElements.get("link-button")) {
	window.customElements.define("link-button", LinkButton);
}

export default LinkButton;
