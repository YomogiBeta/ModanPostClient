import useMe from 'api/useMe';
import AccountPage from '../../modules/account/AccountPage/index';

const Account = () => {
  const { data: meData } = useMe()
    return (
      <>
      {meData !== undefined ? <AccountPage userData={meData} /> : ""}
      </>
        
    )
}

export default Account