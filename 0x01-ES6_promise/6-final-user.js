import createUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  let createdUser; let
    photo;
  try {
    createdUser = await createUser(firstName, lastName);
    photo = await uploadPhoto(fileName);
  } catch (err) { console.log(''); }
  // .finally(err => console.log(''))
  return ([
    {
      status: 200,
      value: createdUser,
      photo,
    },
  ]);
  //   const promises = [];
  //   promises.push(createUser(firstName, lastName));
  //   promises.push(uploadPhoto(fileName));
  //   Promise.allSettled(promises).then((data) => ([
  //     'hi',
  //   ])).catch((err) => {
  //     console.log(err);
  //   });
}
