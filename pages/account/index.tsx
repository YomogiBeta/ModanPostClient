import useMe from 'api/useMe';
import AccountPage from '../../modules/account/AccountPage/index';

const account = () => {
  const { data: meData } = useMe()
    return (
      <>
      {meData !== undefined ? <AccountPage userData={meData} /> : ""}
      </>
        
    )
}

export default account