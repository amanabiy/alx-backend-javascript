import handleResponseFromAPI from './2-then';

const promise = Promise.resolve();
// added testing for failure
const p = Promise.reject(new Error('something bad happened'));
handleResponseFromAPI(p);
handleResponseFromAPI(promise);
