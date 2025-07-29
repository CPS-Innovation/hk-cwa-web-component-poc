
type PropsType = {
	text: string;
};

const LinkButtonComponent = ({ text }: PropsType) => {
	return (<h1 id="h1-link-button-component" className="linkButton">{text}</h1>);
};

export { LinkButtonComponent };
