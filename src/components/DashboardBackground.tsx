import React from "react";
import { css } from "@linaria/core";
import { styled } from "@linaria/react";
import { AnimationNames } from "../components/SharedKeyframeAnimations";

const DashboardBackground = () => (
  <>
    <DashboardHalf className={AnimationNames.appStartFloatInRelative} />
  </>
);
const DashboardHalf = styled.div<{ isRight?: boolean }>`
  content: "";
  background: url("../images/dashboard.png") no-repeat;
  background-size: 100% 47%;
  background-position: 0 100%;
  position: absolute;
  bottom: 0;
  width: 50%;
  z-index: 20;
  padding-bottom: 91%;
  left: 0;
  :after {
    content: "";
    background: url("../images/dashboard.png") no-repeat;
    background-size: 100% 47%;
    background-position: 0 100%;
    position: absolute;
    bottom: 0;
    width: 50%;
    z-index: 20;
    padding-bottom: 91%;
    width: 100%;
    left: calc(100% - 1px);
    top: 0;
    transform: scale(-1, 1);
    width: 100%;
  }
`;

export default DashboardBackground;
