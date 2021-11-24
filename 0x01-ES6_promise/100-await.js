import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const res = [];
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    res.push({
      photo,
      user,
    });
  } catch (err) {
    res.push({
      photo: null,
      user: null,
    });
  }
  return res;
}
