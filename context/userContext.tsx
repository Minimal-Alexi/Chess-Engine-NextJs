import { createContext, useState, ReactNode } from "react";

type UserContextType = {
  username: string;
  setUsername: (name: string) => void;
  login: (name: string) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [username, setUsername] = useState<string>("No name available yet! Loading");

  function login(name: string) {
    setUsername(name);
  }

  const userValue: UserContextType = {
    username,
    setUsername,
    login,
  };

  return (
    <UserContext.Provider value={userValue}>
      {children}
    </UserContext.Provider>
  );
}