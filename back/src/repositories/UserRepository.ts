import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

const UserRepository = AppDataSource.getRepository(User).extend({
    findById: async function (id: number): Promise <User> {
        const user = await this.findOneBy({ id });
        if (user) return user;
        else throw Error("Invalid ID");
    },
    checkById: async function (id: number): Promise<boolean> {
        const user = await this.findById(id);
        return !!user
    }
})

export default UserRepository