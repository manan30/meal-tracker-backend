import bcrypt from 'bcrypt';

export async function encrypt(password: string): Promise<string> {
  const encryptedPassword = await bcrypt.hash(password, 10);
  return encryptedPassword;
}

export async function comparePassword(
  password: string,
  encryptedPassword: string
): Promise<boolean> {
  const match = await bcrypt.compare(password, encryptedPassword);
  return match;
}
