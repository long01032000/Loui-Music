import axios from 'axios'
import {Enpoint} from './../Endpoint'
export const GetAllMusic =  async() =>{
    try {
        const res = await axios.get(`${Enpoint}get-all-music`)
        if(res){
            return res?.data
        }
    } catch (error) {
        return false;
    }
}