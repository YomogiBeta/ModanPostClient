import useMe from "api/useMe";
import { FC, useEffect, useState } from "react";
import AccountInfomationContext from "./AccountInfomationContext";


type AccountInfomationProviderProps = {
  children: React.ReactNode;
};

const AccountInfomationProvider: FC<AccountInfomationProviderProps> = ({ children }) => {
  const { data } = useMe()
  const [loginned, setLoginned] = useState<boolean>(false)

  useEffect(() => {
    setLoginned(data !== undefined)
  }, [data])

  return (
    <AccountInfomationContext.Provider value={{ userData: data, isLoggined: loginned }} >
      {children}
    </AccountInfomationContext.Provider>
  )
}

export default AccountInfomationProvider