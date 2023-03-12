export interface IUser {
    login?: string;
    id?: number;
    created_at?: string;
    email?: string;
    followers?: number;
    following?: number;
    html_url?: string;
    public_gists?: number;
    public_repos?: number;
    name?: string;
    avatar_url?:string;
}
export interface IUserCardProps {
    user: IUser
}
export interface IUserReposProps{
    repos: IUserReposRepo[]
    isDateSorting: boolean
    isNameSorting: boolean
    isStarSorting: boolean
    setIsDateSorting: (arg0: boolean) => void
    setIsNameSorting: (arg0: boolean) => void
    setIsStarSorting: (arg0: boolean) => void
}
export interface IUserReposRepo{
    id?: number;
    stargazers_count: number;
    created_at: string ;
    name?: string;
    html_url?: string;
}
export interface IUserReposRepoCard {
    repo?: IUserReposRepo
}