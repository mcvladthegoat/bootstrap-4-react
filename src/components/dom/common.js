import React, { Component } from 'react';

import {
  stack,
  withColor,
  withDisplay,
  withAlign,
  withSpacing,
  withSizing,
  withBorder,
  withActive,
  withScreenreaders,
  withPopover,
  withTooltip,
  withFlex,
  withFloat,
  withShadow
} from '../../utilities';

export function domStack(Comp) {
  return stack(
    Comp,
    [
      withColor(),
      withDisplay(),
      withAlign(),
      withSpacing(),
      withSizing(),
      withBorder(),
      withActive(),
      withScreenreaders(),
      withPopover(),
      withTooltip(),
      withFlex(),
      withFloat(),
      withShadow()
    ]
  );
}
