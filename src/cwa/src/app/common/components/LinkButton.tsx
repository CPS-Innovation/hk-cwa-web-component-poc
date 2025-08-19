import React, { forwardRef } from "react";
import { h } from '@stencil/core'
import "./LinkButton.module.css";

type LinkButtonProps = {
  id?: string;
  children: any;
  className?: string;
  dataTestId?: string;
  disabled?: boolean;
  ariaLabel?: string;
  ariaExpanded?: boolean;
  type?: "button" | "submit" | "reset";
  onClick: () => void;  
  onFocus?: () => void;
};

export const LinkButton = forwardRef<HTMLButtonElement | null, LinkButtonProps>(
  (
    {
      children,
      className,
      dataTestId,
      onClick,
      onFocus,
      id,
      ariaLabel,
      ariaExpanded,
      disabled = false,
      type,
    },
    ref
  ) => {
    const resolvedClassName = `${"linkButton"} ${className}`;
    return (
      <button
        // ref={ref}  
        aria-label={ariaLabel}
        aria-expanded={ariaExpanded}
        disabled={disabled}
        id={id}
        class={resolvedClassName}
        onClick={onClick}
        data-testid={dataTestId}
        type={type}
        onFocus={onFocus}
      >
        {children}
      </button>
    );
  }
);
