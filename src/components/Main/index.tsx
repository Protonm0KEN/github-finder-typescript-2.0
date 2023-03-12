import React, { FC, useState } from "react";
import "./Main.scss";
import { IUser, IUserReposRepo } from "../../types/User";
import axios from "axios";
import UserCard from "../UserCard";
import UserRepos from "../UserRepos";
const Main: FC = () => {
    const [value, setValue] = useState("");
    const [user, setUser] = useState<IUser>();
    const [userStirng, setUserString] = useState("");
    const [userRepos, setUserRepos] = useState<IUserReposRepo[]>([]);
    const handleChangeSearchUserInputValue: React.ChangeEventHandler<
        HTMLInputElement
    > = (e) => {
        setValue(e.target.value);
    };
    const sendUserString: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setUserString(value);
        setValue("");
        getUserInfo();
    };
    const sendUserStringOnClick: React.MouseEventHandler<
        HTMLButtonElement
    > = () => {
        setUserString(value);
    };
    const API_URL = `https://api.github.com/users/${userStirng}`;
    const REPOS_API_URL = `https://api.github.com/users/${userStirng}/repos`;
    const getUserInfo = async () => {
        const data = await axios.get(API_URL);
        const response = await data.data;
        setUser(await response);
        console.log(`User: \n`);
        console.log(response);
        const reposData = await axios.get(REPOS_API_URL);
        const reposResponse = await reposData.data;
        setUserRepos(await reposResponse);
        console.log(userRepos);
    };
    const [isDateSorting, setIsDateSorting] = useState(false);
    const [isNameSorting, setIsNameSorting] = useState(true);
    const [isStarStarSorting, setIsStarSorting] = useState(false);
    return (
        <>
            <div className="Main">
                <div className="Main__top">
                    <form
                        className="Main__search-user-form"
                        onSubmit={sendUserString}
                        action="submit"
                    >
                        <input
                            placeholder="Введите имя пользователя"
                            value={value}
                            onChange={handleChangeSearchUserInputValue}
                            className="Main__search-user-form-input"
                        />
                        <button
                            className="Main__search-user-form-button"
                            onClick={sendUserStringOnClick}
                        >
                            Найти
                        </button>
                    </form>
                </div>
                <div className="Main__bottom">
                    {user ? (
                        <>
                            <UserCard user={user} />
                            <UserRepos
                                repos={userRepos}
                                isDateSorting={isDateSorting}
                                isNameSorting={isNameSorting}
                                isStarSorting={isStarStarSorting}
                                setIsDateSorting={setIsDateSorting}
                                setIsNameSorting={setIsNameSorting}
                                setIsStarSorting={setIsStarSorting}
                            />
                        </>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </>
    );
};

export default Main;
