import React from "react";

export interface IInput {
  leftIcon?: React.ReactNode; // Component
  name: string;
  control: any;
  placeholder?: string;
  type?: string;
  errorMessage?: string;
}
