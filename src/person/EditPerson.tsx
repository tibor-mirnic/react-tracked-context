import { FC, ChangeEventHandler } from "react";
import { EditAddress } from "./EditAddress";
import { usePersonStore } from "./store";

export const EditPerson: FC = () => {
  const store = usePersonStore();

  console.log("EDIT PERSON");

  const setFirstName: ChangeEventHandler<HTMLInputElement> = (e) => {
    const firstName = e.target.value;
    store.updateFirstName(firstName);
  };

  const setLastName: ChangeEventHandler<HTMLInputElement> = (e) => {
    const lastName = e.target.value;
    store.updateLastName(lastName);
  };
  return (
    <div>
      <div>
        First Name:
        <input value={store.data.firstName || ""} onChange={setFirstName} />
      </div>
      <div>
        Last Name:
        <input value={store.data.lastName || ""} onChange={setLastName} />
      </div>
      <EditAddress />
    </div>
  );
};
