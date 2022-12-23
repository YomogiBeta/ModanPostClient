import { NextPage } from "next"
import PostsView from "./PostsView"
import ModanPostBaseAppShell from '../../components/ModanPostBaseAppShell/index';


const HomePage: NextPage = () => {

  return (
    <>
      <ModanPostBaseAppShell>
        <PostsView />
      </ModanPostBaseAppShell>
    </>
  )
}

export default HomePage