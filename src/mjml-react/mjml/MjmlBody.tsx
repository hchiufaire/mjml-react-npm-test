/*
 * This file is generated. Don't edit it directly.
 * Modify `scripts/generate-mjml-react.ts` to make changes to these files
 */

import React from "react";

import { convertPropsToMjmlAttributes } from "../utils";

interface IProps {
  width?: string | number;
  backgroundColor?: React.CSSProperties["backgroundColor"];
  className?: string;
  cssClass?: string;
}

export const MjmlBody: React.FC<IProps> = ({ children, ...props }) => {
  return React.createElement("mj-body", convertPropsToMjmlAttributes(props), children);
};
