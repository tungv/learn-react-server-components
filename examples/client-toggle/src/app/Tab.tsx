"use client";

import { useSelectedTabState } from "./state";

export default function Tab({
  tabName,
  children,
}: {
  tabName: string;
  children: React.ReactNode;
}) {
  const [activeTab] = useSelectedTabState();

  if (tabName !== activeTab) return null;

  return <div>{children}</div>;
}
