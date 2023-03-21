import { FC, useState } from "react";

import { Person, PersonStore } from "./person";

const App: FC = () => {
  const [isVisible, setIsVisible] = useState<Boolean>(true);

  const onToggle = () => setIsVisible(!isVisible);
  return (
    <>
      <button onClick={onToggle}>Hide CMP</button>
      <hr />
      <hr />

      {isVisible && (
        <PersonStore>
          <Person />
        </PersonStore>
      )}
      <hr />
      <PersonStore>
        <Person />
      </PersonStore>
    </>
  );
};

export default App;
