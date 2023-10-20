"use client";
// * React Dependencies
import React, { ReactNode } from "react";
// * State Management
import { Provider as JotaiProvider } from "jotai";

interface ProviderProps {
  children: ReactNode;
}
/**
 * Jotai State Management Provider
 */
const Provider = ({ children }: ProviderProps) => (
  <JotaiProvider>{children}</JotaiProvider>
);

export default Provider;
export type { ProviderProps };
