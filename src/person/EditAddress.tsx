import { FC, ChangeEventHandler } from "react";
import { usePersonStore } from "./store";

export const EditAddress: FC = () => {
  const store = usePersonStore();

  console.log("EDIT ADDRESS");

  const setCountry: ChangeEventHandler<HTMLInputElement> = (e) => {
    const country = e.target.value;
    store.updateCountry(country);
  };

  const setCity: ChangeEventHandler<HTMLInputElement> = (e) => {
    const city = e.target.value;
    store.updateCity(city);
  };
  return (
    <div>
      <div>
        Country:
        <input value={store.data.address.country || ""} onChange={setCountry} />
      </div>
      <div>
        City:
        <input value={store.data.address.city || ""} onChange={setCity} />
      </div>
    </div>
  );
};
