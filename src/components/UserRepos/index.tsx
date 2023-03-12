import React, { FC, useState } from "react";
import { IUserReposProps, IUserReposRepo } from "../../types/User";
import RepoCard from "../RepoCard";
import "./UserRepos.scss";
const UserRepos: FC<IUserReposProps> = (props) => {
    const {
        isDateSorting,
        isNameSorting,
        isStarSorting,
        repos,
        setIsDateSorting,
        setIsNameSorting,
        setIsStarSorting,
    } = props;
    const setDateSorting = () => {
        setIsDateSorting(true);
        setIsNameSorting(false);
        setIsStarSorting(false);
        setClickedByDate(!clickedByDate)
    };
    const setNameSorting = () => {
        setIsDateSorting(false);
        setIsNameSorting(true);
        setIsStarSorting(false);
        setClickedByName(!clickedByName)
    };
    const setStarSorting = () => {
        setIsDateSorting(false);
        setIsNameSorting(false);
        setIsStarSorting(true);
        setClickedByStars(!clickedByStars)
    };

    const [clickedByName, setClickedByName] = useState(false);
    const [clickedByStars, setClickedByStars] = useState(false);
    const [clickedByDate, setClickedByDate] = useState(false);

    const compareNumeric = (a:number, b:number):number | undefined => {
        if (a > b) {
            if (isStarSorting && clickedByStars === false) {
                return 1;
            } else {
                return -1;
            }
        }else if (a === b){
            return 0;
        }else if (a < b) {
            if (isStarSorting && clickedByStars === false) {
                return -1;
            } else {
                return 1;
            }
        }
    };
    const compareDate = (a: string, b: string) : number | undefined => {
        if (a > b) {
            if (isDateSorting && clickedByDate === false) {
                return 1;
            } else {
                return -1;
            }
        }else if (a === b) {
            return 0;
        }else if (a < b) {
            if (isDateSorting && clickedByDate === false) {
                return -1;
            } else {
                return 1;
            }
        }
    };
    return (
        <>
            <div className="UserRepos">
                <div className="UserRepos__top">
                    <div className="UserRepos__sorting">
                        <h1>Сортировка</h1>
                        <div className="sorting__buttons">
                            <button
                                onClick={setNameSorting}
                                className={
                                    isNameSorting
                                        ? `sorting__button active`
                                        : `sorting__button`
                                }
                            >
                                Имя
                            </button>
                            <button
                                onClick={setStarSorting}
                                className={
                                    isStarSorting
                                        ? `sorting__button active`
                                        : `sorting__button`
                                }
                            >
                                Звезды
                            </button>
                            <button
                                onClick={setDateSorting}
                                className={
                                    isDateSorting
                                        ? `sorting__button active`
                                        : `sorting__button`
                                }
                            >
                                Дата
                            </button>
                        </div>
                    </div>
                </div>
                <div className="UserRepos__bottom">
                    {isNameSorting === true
                        ? repos
                              .sort((a: any, b: any) => {
                                  if (!clickedByName) {
                                      return b.name.localeCompare(a.name);
                                  } else {
                                      return a.name.localeCompare(b.name);
                                  }
                              })
                              .map((repo, index) => {
                                  return (
                                      <>
                                          <RepoCard key={repo.id} repo={repo} />
                                      </>
                                  );
                              })
                        : isDateSorting === true
                        ? repos
                              .sort((a, b) : any =>
                                  compareDate(b.created_at, a.created_at)
                              )
                              .map((repo) => {
                                  return (
                                      <>
                                          <RepoCard key={repo.id} repo={repo} />
                                      </>
                                  );
                              })
                        : isStarSorting === true
                        ? repos
                              .sort((a: IUserReposRepo, b: IUserReposRepo): any =>
                                  compareNumeric(a.stargazers_count, b.stargazers_count)
                              )
                              .map((repo, index) => {
                                  return (
                                      <> 
                                          <RepoCard key={repo.id} repo={repo} />
                                      </>
                                  );
                              })
                        : repos
                        .sort((a: any, b: any) => {
                            if (!isNameSorting) {
                                return b.name.localeCompare(a.name);
                            } else {
                                return a.name.localeCompare(b.name);
                            }
                        })
                        .map((repo, index) => {
                            return (
                                <>
                                    <RepoCard key={repo.id} repo={repo} />
                                </>
                            );
                        })}
                </div>
            </div>
        </>
    );
};

export default UserRepos;
