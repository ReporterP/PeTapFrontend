import axios from "axios"


export default class PostService {
    static async getAll () {
        try {
            const response = await axios.get("url")
        } catch (e) {
            console.log(e)
        }
    }
}