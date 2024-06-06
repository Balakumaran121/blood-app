import React, {
  useContext,
  createContext,
  useState,
  FC,
  ReactNode,
} from "react";

type User = {
  id?: string;
  name?: string;
  email?: string;
};

interface UserAuthContextType {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserAuthContext = createContext<UserAuthContextType | undefined>(
  undefined
);

export function useUserAuth(): UserAuthContextType {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error("Context not available");
  }
  return context;
}

interface UserAuthContextProviderProps {
  children: ReactNode;
}

export const UserAuthContextProvider: FC<UserAuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User>({});
  return (
    <UserAuthContext.Provider value={{ user, setUser }}>
      {children}
    </UserAuthContext.Provider>
  );
};
