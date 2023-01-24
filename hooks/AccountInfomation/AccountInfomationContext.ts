import { createContext } from "react"
import { User } from "types";

type AccountInfomationContextType = {
  userData: User | undefined
  isLoggined: boolean
}
const AccountInfomationContext = createContext<AccountInfomationContextType>({
  userData: undefined,
  isLoggined: false,
})
export default AccountInfomationContext