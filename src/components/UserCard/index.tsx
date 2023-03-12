import React, { FC } from 'react'
import { IUserCardProps } from "../../types/User";
import "./UserCard.scss"
const UserCard:FC<IUserCardProps> = ({user}) => {
  return (
    <>
    <div className="UserCard">
        <div className="UserCard__left">
            <img className="UserCard__avatar" src={`${user.avatar_url}`}  alt = "user-avatar"/>
            <button className="UserCard__button"><a className="link-to-github" href={user.html_url}>Посетить</a></button>
        </div>
        <div className="UserCard__right">
            <p className="UserCard__login">{user.login}</p>
            <p className="UserCard__repos">Репозиториев: <span>{user.public_repos}</span></p>
            <p className="UserCard__created-at">Создан: <span>{user.created_at?.substring(0, 10)}</span></p>
            <p className="UserCard__followers">Подписщиков: <span>{user.followers}</span></p>
            <p className="UserCard__following">Подписок: <span>{user.following}</span></p>
        </div>
    </div>
    </>
  )
}

export default UserCard