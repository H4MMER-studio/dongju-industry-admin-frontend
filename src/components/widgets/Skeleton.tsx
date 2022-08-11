import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { StringLiteral } from "typescript";

interface IProps {
    variant: "text" | "circular" | "rectangular";
    width: number | string;
    height: number;
}

const SkeletonUI: React.FC<IProps> = ({ variant, width, height }) => {
    return <Skeleton variant={variant} width={width} height={height} />;
};

export default SkeletonUI;
