import axios from "axios";

const instance = axios.create({
<<<<<<< HEAD
    baseURL:
        "https://us-central1-clone-c18a0.cloudfunctions.net/api"
    // 'http://localhost:5001/clone-c18a0/us-central1/api'
=======
    baseURL: 'http://localhost:5001/clone-c18a0/us-central1/api'
>>>>>>> 3465c6d8817a3598a2da056508c15e1113414b49
});

export default instance;