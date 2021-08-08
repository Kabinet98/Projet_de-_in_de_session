import DownloadList from "./DownloadList";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import {useSelector} from 'react-redux';
import {userSelector} from '../app/features/UserSlice'
const Home = () => {
  const user = useSelector(userSelector);
  return (
    <div className="home">
      <Sidebar
        username={user?.name}
        src={user?.photo}
      />
      <Feed />
      <DownloadList className="downloadList" />
    </div>
  );
};
export default Home;
