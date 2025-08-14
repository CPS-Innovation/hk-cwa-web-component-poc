import * as GDS from "govuk-react-jsx";
import React from "react";
import { TagColor } from "../types/TagColor";
import { h } from '@stencil/core'

export type TagProps = {
  gdsTagColour: TagColor;
  className?: string;
};

export const Tag: React.FC<TagProps> = ({
  className,
  gdsTagColour,
  ...props
}) => {
  return (
    <GDS.Tag
      className={`govuk-tag--${gdsTagColour} ${className || ""}`}
      {...props}
    ></GDS.Tag>
  );
};
