import React, { forwardRef } from "react";
// import classes from  "./LinkButton.module.scss";

type LinkButtonProps = {
  id?: string;
  children: React.ReactNode;
  className?: string | any;
  dataTestId?: string | any;
  disabled?: boolean | any;
  ariaLabel?: string | any;
  ariaExpanded?: boolean | any;
  type?: "button" | "submit" | "reset";
  onClickFn?: (a: any) => {};
  onSetColorFn?: () => {} | undefined;
  onFocus?: () => void;
  text: string
};

export const LinkButtonComponent = forwardRef<HTMLButtonElement | null, LinkButtonProps>(
  (
    {
      children,
      className,
      dataTestId,
      onClickFn,
      onSetColorFn,
      onFocus,
      id,
      ariaLabel,
      ariaExpanded,
      disabled = false,
      type,
      text
    },
    ref
  ) => {
    const resolvedClassName = `linkButton`;
    const setColorFnValue = onSetColorFn();
    return (
      <button
        ref={ref}
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        disabled={disabled}
        id={id}
        className={resolvedClassName}
        onClick={()=>alert(onClickFn('0'))}
        data-testid={dataTestId}
        type={type}
        onFocus={onFocus}
        style={{'color': setColorFnValue}} 
      >
        {setColorFnValue?.toString()}
        {children}
      </button>
    );
  }
);
