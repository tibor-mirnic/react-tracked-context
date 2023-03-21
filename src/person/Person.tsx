import { FC } from "react";

import { EditPerson } from "./EditPerson";
import { ShowPerson } from "./ShowPerson";

export const Person: FC = () => {
  return (
    <>
      <EditPerson />
      <ShowPerson />
    </>
  );
};
