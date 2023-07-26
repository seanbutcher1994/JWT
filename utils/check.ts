import { User } from "../models/users";

export const check = {
    email: async function (email: string) {
        const user = await User.findOne({email: email})
        if (user) {
            return true;
        }
        return false;
    }
}