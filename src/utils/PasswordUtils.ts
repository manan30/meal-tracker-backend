import bcrypt from 'bcrypt';

export async function encrypt(password: string): Promise<string> {
  const encryptedPassword = await bcrypt.hash(password, 10);
  return encryptedPassword;
}

// export async function decrypt(encryptedPassword: string) {
//   // const password = bcrypt.
//   return '';
// }
