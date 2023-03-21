import { FC, useState } from "react";

import { usePersonStore } from "./store";

export const ShowPerson: FC = () => {
  const store = usePersonStore();

  console.log("SHOW PERSON");

  const [onlyFirstName, setOnlyFirstName] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setOnlyFirstName((s) => !s)}>
        {onlyFirstName ? "Showing only first name" : "Showing full name"}
      </button>

      {onlyFirstName ? (
        <div>First Name: {store.data.firstName}</div>
      ) : (
        <div>
          Full Name: {store.data.firstName} {store.data.lastName}
        </div>
      )}
    </div>
  );
};
