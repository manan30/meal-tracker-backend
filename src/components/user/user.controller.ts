import { Response } from '../../interfaces/response.interface';
import { encrypt, comparePassword } from '../../utils/PasswordUtils';
import Status from '../../utils/ResponseStatus';
import {
  ACCOUNT_CREATED,
  SERVER_ERROR,
  USER_EXISTS,
  USER_NOT_FOUND,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED
} from '../../utils/ServerMessages';
import { User } from './user.interface';
import UserModel from './user.model';

class UserController {
  public async createUser(body: User): Promise<Response> {
    try {
      const user = await UserModel.findOne({ email: body.email });
      if (!user) {
        return new Status(false, USER_EXISTS);
      }
      const newUser = new UserModel(body);
      const token = newUser.generateAuthToken();
      const encryptedPassword = await encrypt(body.password);
      newUser.password = encryptedPassword;
      newUser.tokens.accessToken = token;

      let createdUser = await newUser.save();
      createdUser = JSON.parse(JSON.stringify(createdUser));
      delete createdUser.password;

      return new Status(true, ACCOUNT_CREATED, { createdUser, token });
    } catch (err) {
      return new Status(false, SERVER_ERROR(err));
    }
  }

  public async loginUser(body: User): Promise<Response> {
    try {
      const user = await UserModel.findOne({ email: body.email });

      if (!user) {
        return new Status(false, USER_NOT_FOUND);
      }

      let token: string;

      const passwordMatch = comparePassword(body.password, user.password);

      if (passwordMatch) {
        if (!user.tokens.accessToken) {
          token = user.generateAuthToken();
          user.tokens.accessToken = token;
          await user.save();
        } else {
          token = user.tokens.accessToken;
        }
        const loggedInUser = JSON.parse(JSON.stringify(user));
        return new Status(true, LOGIN_SUCCESSFUL, {
          user: loggedInUser,
          token
        });
      } else {
        return new Status(false, LOGIN_FAILED);
      }
    } catch (err) {
      return new Status(false, SERVER_ERROR(err));
    }
  }
}

export default new UserController();
