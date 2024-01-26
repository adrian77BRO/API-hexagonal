import bcrypt from "bcrypt"
import { BCRYPT_SALTOS } from "../../domain/constants";

export const createPasswordHash = (password: string) => {
    return bcrypt.hashSync(password, BCRYPT_SALTOS);
}