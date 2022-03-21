import { useEffect, useState } from "react";
import { getCurrentUser, login, logout } from "src/api/authentication";
import { AuthContext } from "src/contexts/AuthContext";
import { CurrentUser, LoginRequest } from "src/types/AuthenticationTypes";

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<CurrentUser>();

  useEffect(() => {
    getCurrentUserFunction();
  }, []);

  const loginFunction = (data: LoginRequest) =>
    login(data).then(setCurrentUser);

  const logoutFunction = () => logout().then(() => setCurrentUser(undefined));

  const getCurrentUserFunction = () => getCurrentUser().then(setCurrentUser);

  console.log(currentUser);
  return (
    <AuthContext.Provider
      value={{
        currentUser: currentUser,
        login: loginFunction,
        logout: logoutFunction,
        getCurrentUser: getCurrentUserFunction,
        isLogged: currentUser !== undefined,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
