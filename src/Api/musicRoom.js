import axios from 'axios'
import {Enpoint} from './../Endpoint'
export const GetRoomChat =  async() =>{
    try {
        const res = await axios.get(`${Enpoint}roomschat`)
        if(res){
            return res?.data
        }
    } catch (error) {
        return false;
    }
}