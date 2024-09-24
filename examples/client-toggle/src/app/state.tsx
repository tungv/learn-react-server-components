"use client";

import { createReducerContext } from "src/utils/createReducerContext";

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

const [StateProvider, useStateContext, useDispatch] = createReducerContext(
  function reducer(state: State, action: Action) {
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
  },
  initialState,
);

export default StateProvider;

export function useSelectedTabState() {
  const state = useStateContext();
  const dispatch = useDispatch();

  return [
    state.activeTab,
    () => dispatch({ type: "toggleActiveTab" }),
  ] as const;
}
