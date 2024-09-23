"use client";

import { createContext, useContext, useReducer } from "react";

const tabs = ["default", "secondary"] as const;

interface State {
  activeTab: (typeof tabs)[number];
}

type Action = {
  type: "toggleActiveTab";
};

const initialState: State = {
  activeTab: "default",
} as const;

const ctx = createContext<State | null>(null);
const dispatchCtx = createContext<React.Dispatch<Action> | null>(null);

export default function StateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useReducer(function reducer(
    state: State,
    action: Action,
  ) {
    switch (action.type) {
      case "toggleActiveTab":
        return {
          ...state,
          activeTab:
            state.activeTab === "default"
              ? ("secondary" as const)
              : ("default" as const),
        };
      default:
        return state;
    }
  }, initialState);

  return (
    <ctx.Provider value={state}>
      <dispatchCtx.Provider value={dispatch}>{children}</dispatchCtx.Provider>
    </ctx.Provider>
  );
}

export function useSelectedTabState() {
  const state = useContext(ctx);
  const dispatch = useContext(dispatchCtx);

  if (state === null || dispatch === null) {
    throw new Error("useSelectedTabState must be used within a StateProvider");
  }

  return [
    state.activeTab,
    () => dispatch({ type: "toggleActiveTab" }),
  ] as const;
}
