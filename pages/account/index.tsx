import AccountPage from '../../modules/account/AccountPage/index';
import useAccount from 'hooks/AccountInfomation/useAccount';
import ErrorPage from 'next/error'

const Account = () => {
  const { userData } = useAccount()
  return (
    <>
      {userData !== undefined ? <AccountPage userData={userData} /> :  <ErrorPage statusCode={404} />}
    </>

  )
}

export default Account