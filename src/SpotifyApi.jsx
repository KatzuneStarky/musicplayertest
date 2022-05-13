import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "26e433e32ef1488e924f7f92ce9b4373";
const redirectURI = "http://localhost:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;


const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/"
})

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (confing) {
        confing.headers.Authorization = "Bearer " + token
        return confing
    })
}

export default apiClient