import { ResponseStatus } from '../../interfaces/response.interface';
import { encrypt } from '../../utils/PasswordUtils';
import { User } from './user.interface';
import UserModel from './user.model';
import Response from '../../utils/ResponseStatus';

class UserController {
  public async createUser(body: User): Promise<ResponseStatus> {
    try {
      const user = await UserModel.findOne({ email: body.email });
      if (user) {
        return new Response(false, 'User already exists ');
      }
      const newUser = new UserModel(body);
      const encryptedPassword = await encrypt(body.password);
      newUser.password = encryptedPassword;
      await newUser.save();
      return new Response(true, 'Account created successfully');
    } catch (err) {
      return new Response(false, `Internal server error: ${err}`);
    }
  }
}

export default new UserController();
