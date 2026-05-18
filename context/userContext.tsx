"use client";
import { createContext, useState, ReactNode } from "react";

type UserContextType = {
    id:number;
    username: string;
    setUsername: (name: string) => void;
    login: (name: string,id:number) => void;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [username, setUsername] = useState<string>("No name available yet! Loading");
  const [id, setId] = useState<number>(-1)

  function login(name: string,id:number) {
    setUsername(name);
    setId(id)
  }

  const userValue: UserContextType = {
    id,
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