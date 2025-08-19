import { render, h } from '@stencil/core';
import * as GDS from 'govuk-react-jsx';
import _ from 'lodash';
import { TagColor } from '../types/TagColor';

export type TagProps = {
  gdsTagColour: TagColor;
  className?: string;
};

export const Tag: React.FC<TagProps> = ({ className, gdsTagColour, ...props }) => {
  {
    console.log('gds tag with lodash loaded in render method');
  }
  return <div class={`govuk-tag--${gdsTagColour} ${className || ''}`}>{console.log(_)}; Tag component</div>;
};
