import { db } from "../../../shared/application/mysqlConnection";
import { User } from "../../domain/entities";
import { UserRepository } from "../../domain/repository/userRepository";

export class MySqlRepositoryUser implements UserRepository {
    getUserByEmail(email: string): Promise<User> {
        const query = "SELECT * FROM users WHERE email = ?";
        return db.execute(query, [email]).then((res: any) => {
            console.log(res[0])
            return res[0][0] as User;
        });
    }
    getUsers(): Promise<User[]> {
        const query = "SELECT * FROM users";
        return db.execute(query).then((res: any) => res[0] as User[]);
    }
    createUser(user: User): Promise<User> {
        const { email, password, username } = user;
        const query =
            "INSERT INTO users (email, password, username) VALUES (?,?,?)";
        return db
            .execute(query, [email, password, username])
            .then((res: any) => res.values as User);
    }
    deleteUserByEmail(email: string): Promise<void> {
        const query = "DELETE FROM users WHERE email = ?";
        return db.execute(query, [email]).then((res: any) => res[0] as void);
    }
    updateUserByEmail(emailKey: string, user: User): Promise<User> {
        const { email, password, username } = user;
        const query =
            "UPDATE users SET email = ?, password = ?, username = ? WHERE email = ?";
        return db
            .execute(query, [email, password, username, emailKey])
            .then((res: any) => res[0] as User);
    }
}