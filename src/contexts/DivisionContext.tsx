import { createContext, useContext, useEffect, useReducer, ReactNode, useCallback } from "react";

export type Division = "bim" | "construction";

type State = { activeDivision: Division; isTransitioning: boolean };
type Action =
  | { type: "SET_DIVISION"; payload: Division }
  | { type: "TOGGLE_DIVISION" }
  | { type: "END_TRANSITION" };

const STORAGE_KEY = "witec-division";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_DIVISION":
      if (state.activeDivision === action.payload) return state;
      return { activeDivision: action.payload, isTransitioning: true };
    case "TOGGLE_DIVISION":
      return {
        activeDivision: state.activeDivision === "bim" ? "construction" : "bim",
        isTransitioning: true,
      };
    case "END_TRANSITION":
      return { ...state, isTransitioning: false };
    default:
      return state;
  }
}

function readInitial(): Division {
  if (typeof window === "undefined") return "bim";
  try {
    const url = new URL(window.location.href);
    const q = url.searchParams.get("division");
    if (q === "bim" || q === "construction") return q;
    const ls = window.localStorage.getItem(STORAGE_KEY);
    if (ls === "bim" || ls === "construction") return ls;
  } catch {
    /* ignore */
  }
  return "bim";
}

interface Ctx {
  division: Division;
  isTransitioning: boolean;
  setDivision: (d: Division) => void;
  toggle: () => void;
}

const DivisionContext = createContext<Ctx | undefined>(undefined);

export function DivisionProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, undefined, () => ({
    activeDivision: readInitial(),
    isTransitioning: false,
  }));

  // Apply data-division on <html>, persist, sync URL
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-division", state.activeDivision);
    try {
      localStorage.setItem(STORAGE_KEY, state.activeDivision);
      const url = new URL(window.location.href);
      url.searchParams.set("division", state.activeDivision);
      window.history.replaceState({}, "", url.toString());
    } catch {
      /* ignore */
    }
    const t = setTimeout(() => dispatch({ type: "END_TRANSITION" }), 550);
    return () => clearTimeout(t);
  }, [state.activeDivision]);

  // Listen for browser back/forward URL changes
  useEffect(() => {
    const onPop = () => {
      const url = new URL(window.location.href);
      const q = url.searchParams.get("division");
      if ((q === "bim" || q === "construction") && q !== state.activeDivision) {
        dispatch({ type: "SET_DIVISION", payload: q });
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, [state.activeDivision]);

  const setDivision = useCallback((d: Division) => dispatch({ type: "SET_DIVISION", payload: d }), []);
  const toggle = useCallback(() => dispatch({ type: "TOGGLE_DIVISION" }), []);

  return (
    <DivisionContext.Provider
      value={{ division: state.activeDivision, isTransitioning: state.isTransitioning, setDivision, toggle }}
    >
      {children}
    </DivisionContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useDivision() {
  const ctx = useContext(DivisionContext);
  if (!ctx) throw new Error("useDivision must be used within DivisionProvider");
  return ctx;
}