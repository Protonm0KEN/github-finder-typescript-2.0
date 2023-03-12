import React, { FC } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

const App: FC = () => {
    //const [userLogin, setUserLogin] = useState("Protonm0KEN");
    //const API_LINK = `https://api.github.com/users/${userLogin}`;
    //const [users, setUsers] = useState<IUser[]>([]);
    //async function getUserInfo() {
    //    const data = await axios.get(API_LINK);
    //    const endData = await data.data;
    //    setUsers([...users, endData]);
    //    return console.log(endData);
    //}
    //const handleChangeUserLogin: React.ChangeEventHandler<HTMLInputElement> = (
    //    e
    //) => {
    //    setUserLogin(e.target.value);
    //};
    //useEffect(() => {
    //    console.log(`User List: \n`);
    //    console.log(users);
    //}, [users]);
    return (
        <>
            <Header />
            <Main/>
        </>
    );
};

export default App;
