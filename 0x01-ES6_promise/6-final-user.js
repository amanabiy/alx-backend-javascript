import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
    const response = []
    try {
        const user = await signUpUser(firstName, lastName);
        response.push({ status: 'success', value: user });
        await uploadPhoto(fileName);
    } catch (err) {
        response.push({
            status: 'failed',
            value: `Error: ${fileName} is not valid`,
        });
    }
    return response;
}
