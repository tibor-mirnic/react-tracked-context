import { useState, useCallback, useMemo } from "react";
import { createContainer } from "react-tracked";

type ErrorFn = () => Error;

const errorFn: ErrorFn = () => {
  throw new Error("use functions in the state");
};

type State = {
  firstName?: string;
  lastName?: string;
  address: {
    country?: string;
    city?: string;
  };
};

export type Store = {
  data: State;
  updateFirstName: (firstName: string) => void;
  updateLastName: (lastName: string) => void;
  updateCountry: (country: string) => void;
  updateCity: (city: string) => void;
};

export const useStore = (): [Store, ErrorFn] => {
  const [state, setState] = useState<State>({ address: {} });

  const updateFirstName = useCallback((firstName: string) => {
    setState((c) => ({ ...c, firstName }));
  }, []);

  const updateLastName = useCallback((lastName: string) => {
    setState((c) => ({ ...c, lastName }));
  }, []);

  const updateCountry = useCallback((country: string) => {
    setState((c) => ({
      ...c,
      address: {
        ...c.address,
        country,
      },
    }));
  }, []);

  const updateCity = useCallback((city: string) => {
    setState((c) => ({
      ...c,
      address: {
        ...c.address,
        city,
      },
    }));
  }, []);

  const store = useMemo(
    () => ({
      data: state,
      updateFirstName,
      updateLastName,
      updateCountry,
      updateCity,
    }),
    [state, updateFirstName, updateLastName, updateCountry, updateCity]
  );

  return [store, errorFn];
};

export const { Provider: PersonStore, useTrackedState: usePersonStore } =
  createContainer(useStore);
