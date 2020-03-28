import { Response } from '../../interfaces/response.interface';
import { comparePassword, encrypt } from '../../utils/PasswordUtils';
import Status from '../../utils/ResponseStatus';
import {
  ACCOUNT_CREATED,
  LOGIN_FAILED,
  LOGIN_SUCCESSFUL,
  SERVER_ERROR,
  USER_EXISTS,
  USER_NOT_FOUND
} from '../../utils/ServerMessages';
import { User } from './user.interface';
import UserModel from './user.model';

class UserController {
  user: User | null | undefined;

  public async createUser(body: User): Promise<Response> {
    try {
      this.user = await UserModel.findOne({ email: body.email });
      if (this.user) {
        return new Status(false, 400, USER_EXISTS);
      }
      const newUser = new UserModel(body);
      const token = newUser.generateAuthToken();
      const encryptedPassword = await encrypt(body.password);
      newUser.password = encryptedPassword;
      newUser.tokens.accessToken = token;

      let createdUser = await newUser.save();
      createdUser = JSON.parse(JSON.stringify(createdUser));
      delete createdUser.password;

      return new Status(true, 200, ACCOUNT_CREATED, {
        user: createdUser,
        token
      });
    } catch (err) {
      return new Status(false, 500, SERVER_ERROR(err));
    }
  }

  public async loginUser(body: User): Promise<Response> {
    try {
      this.user = await UserModel.findOne({ email: body.email });

      if (!this.user) {
        return new Status(false, 400, USER_NOT_FOUND);
      }

      let token: string;

      const passwordMatch = await comparePassword(
        body.password,
        this.user.password
      );

      if (passwordMatch) {
        if (!this.user.tokens.accessToken) {
          token = this.user.generateAuthToken();
          this.user.tokens.accessToken = token;
          await this.user.save();
        } else {
          token = this.user.tokens.accessToken;
        }

        this.user.populate('recipes').populate('saved');

        return new Status(true, 200, LOGIN_SUCCESSFUL, {
          user: this.user,
          token
        });
      }
      return new Status(false, 400, LOGIN_FAILED);
    } catch (err) {
      return new Status(false, 500, SERVER_ERROR(err));
    }
  }
}

export default new UserController();
