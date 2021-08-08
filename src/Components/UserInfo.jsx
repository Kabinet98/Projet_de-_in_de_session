import UserInfoPage from "./UserInfoPage"
import { userSelector } from "../app/features/UserSlice";
import { useSelector } from "react-redux";
const UserInfo = () =>{
    const user = useSelector(userSelector);
    return(
        <div className="userInfo">
            <UserInfoPage 
            src={user?.photo}
            name={user?.name}
            email={user?.email}
            phoneNumber ={user?.phone}
            eutherumAddress = "02f23yut50ere390erTKL"
            />
        </div>
    )
}
export default UserInfo;