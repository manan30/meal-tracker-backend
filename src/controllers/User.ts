import UserModel, { UserDocument } from '../models/User';
import { encrypt } from '../utils/PasswordUtils';

class UserController {
  public async fetchUser() {
    UserModel.find(function UserFind(err: any, resp: UserDocument[]) {
      console.log({ err, resp });
      return resp;
    });
  }

  public async createUser(body: any) {
    let data: UserDocument | Error;
    const encryptedPassword = await encrypt(body.password);

    try {
      data = await UserModel.create({ ...body, password: encryptedPassword });
    } catch (err) {
      data = err;
    }

    return data;
  }
}

export default new UserController();
