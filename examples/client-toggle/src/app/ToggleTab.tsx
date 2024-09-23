"use client";

import { Switch } from "@radix-ui/themes";
import { useSelectedTabState } from "./state";

export default function ToggleTab({
  labelNode,
}: {
  labelNode: React.ReactNode;
}) {
  const [activeTab, toggle] = useSelectedTabState();

  return (
    <div>
      <Switch checked={activeTab === "default"} onCheckedChange={toggle} />
      {labelNode}
    </div>
  );
}
