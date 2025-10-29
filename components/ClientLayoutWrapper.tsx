"use client";

import { CustomCursor } from "./CustomCursor";
import { FooterMinimal } from "./FooterMinimal";
import { NavigationDock } from "./NavigationDock";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <NavigationDock />
      {children}
      <FooterMinimal />
    </>
  );
}
