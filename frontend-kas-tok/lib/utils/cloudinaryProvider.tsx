"use client";
import { memo } from "react";
import { CloudinaryContext } from "cloudinary-react";

const CloudinaryProvider = ({ children }: any) => {
  return (
    <CloudinaryContext cloud_name="dcoebvibe">{children}</CloudinaryContext>
  );
};

export default CloudinaryProvider;
