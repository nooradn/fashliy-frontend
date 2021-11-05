let apiUrl = `https://fashliy.herokuapp.com`

let config = {
    urls: {
        userLogin() { return `${apiUrl}/api/users/login` },
        userInfo() { return `${apiUrl}/api/users/info` },
        userRegister() { return `${apiUrl}/api/users/register` },
    },

    localStorage: {
        jwtToken: 'jwt-token',
    }
}

export default config