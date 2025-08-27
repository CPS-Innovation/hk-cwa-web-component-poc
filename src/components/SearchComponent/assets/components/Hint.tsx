import * as GDS from "govuk-react-jsx";
// import styles from "./Hint.module.scss?inline";

type HintProps = React.DetailedHTMLProps<
	React.HTMLAttributes<HTMLDivElement>,
	HTMLDivElement
> & {
	className?: string;
};

export const Hint: React.FC<HintProps> = ({
	className,
	children,
	...attributes
}) => {
	return (
		<GDS.Hint
			style={{
				fontSize: "1.25rem",
			}}
			className={className}
			{...attributes}
		>
			{children}
		</GDS.Hint>
	);
};
