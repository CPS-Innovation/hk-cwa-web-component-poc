import * as GDS from "govuk-react-jsx";


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
    <GDS.Hint className="root">
      {children}
    </GDS.Hint>
  );
};
