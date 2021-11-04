let apiUrl = `https://fashliy.herokuapp.com`

let config = {
    urls: {
        userLogin() { return `${apiUrl}/api/users/login` },
        userInfo() { return `${apiUrl}/api/users/info` },
    },

    localStorage: {
        jwtToken: 'jwt-token',
    }
}

export default config