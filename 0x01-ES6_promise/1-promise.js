export default function getFullResponseFromAPI(success) {
  const promise = new Promise((resolve, reject) => {
    if (success === false) {
      reject(Error('The fake API is not working currently'));
    } else {
      resolve({
        status: 200,
        body: 'Success',
      });
    }
  });
  return promise;
}
