import styled from "styled-components";
import { ButtonCommon, sizes, stickyPosition, variants } from "../../theme";
import { ButtonType } from "./Button.types";

const Button = styled("button")<ButtonType>(
  (props: ButtonType) => ({
    ...ButtonCommon,
    ...variants[props?.variant!],
    ...sizes[props?.size!],
    ...stickyPosition[props?.stickyPosition!],
  }),
  `
  &:hover {
    transform: scale(1.1);
    transition-duration: 0.3s;
    filter: saturate(1.3);
  }
  &:active {
    transform: scale(0.95);
    box-shadow:0px 0px;
  }

  &:disabled{
    transform:none;
    pointer-events: none;
    background: gray;
    box-shadow:none;
  }
  `
);

export default Button;
