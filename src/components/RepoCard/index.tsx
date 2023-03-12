import React, { FC } from "react";
import { IUserReposRepoCard } from "../../types/User";
import "./RepoCard.scss";
const RepoCard: FC<IUserReposRepoCard> = (props) => {
    return (
        <div className="Repo">
            <div className="Repo__left">
                <p className="Repo__title">{props.repo?.name}</p>
                <p className="Repo__stars">
                    Количество звёзд: {props.repo?.stargazers_count}
                </p>
                <p className="Repo__date">
                    Дата добавления: {props.repo?.created_at.substring(0, 10)}
                </p>
            </div>
            <div className="Repo__right">
                <button className="Repo__link">
                    <a target={"_blank"} href={props.repo?.html_url}>
                        Посетить
                    </a>
                </button>
            </div>
        </div>
    );
};

export default RepoCard;
