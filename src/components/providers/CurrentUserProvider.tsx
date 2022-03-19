import { useEffect, useState } from "react";
import { getCurrentUser } from "src/api/AuthenticationApi";
import { CurrentUserContext } from "src/contexts/CurrentUserContext";
import { CurrentUser } from "src/types/AuthenticationTypes";

interface Props {
  children: React.ReactNode;
}

export const CurrentUserProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>();

  useEffect(() => {
    getCurrentUser().then(setCurrentUser);
  }, []);
  console.log(currentUser);
  return (
    <CurrentUserContext.Provider
      value={{ currentUser: currentUser, setCurrentUser: setCurrentUser }}
    >
      {children}
    </CurrentUserContext.Provider>
  );
};
