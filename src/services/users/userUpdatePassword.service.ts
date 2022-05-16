import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from 'bcrypt';
import AppError from "../../errors/AppError";

const userUpdatePasswordService = async (email: string, password: string) => {
    const userRepository = AppDataSource.getRepository(User)

    const users = await userRepository.find()

    const account = users.find(user => user.email === email)

    if(!account){
        throw new AppError(404, "Account not exists")
    }

    if(bcrypt.compareSync(password, account!.password)){
        throw new AppError(400, "Inform a differente password.")
    }

    const newPassword = bcrypt.hashSync(password, 10)

    await userRepository.update(account!.id, { password: newPassword})

    return true
}

export default userUpdatePasswordService