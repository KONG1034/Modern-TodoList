export const emailCheck = (email) => {
    const checkEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]/;
    if(checkEmail.test(email)) {
        return true
    } else {
        return false
    }
}