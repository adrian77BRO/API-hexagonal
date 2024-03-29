import { User, UserResponse } from "../entities";
import { getUserDto } from "./getUserDto";

export function getAllUserDtos(users: User[]): UserResponse[] {
    const formatedUsers: UserResponse[] = [];
    users.forEach((user) => {
        formatedUsers.push(getUserDto(user));
    });
    return formatedUsers;
}