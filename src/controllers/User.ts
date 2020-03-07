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

    try {
      let user = await UserModel.findOne({ email: body.email });
      if (user) {
        return { status: false, message: 'User already exists' };
      }
      const encryptedPassword = await encrypt(body.password);
      user = new UserModel({
        ...body,
        password: encryptedPassword
      });
      data = await user.save();
    } catch (err) {
      data = err;
    }

    return data;
  }
}

export default new UserController();
