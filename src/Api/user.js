import axios from 'axios'
import {Enpoint} from './../Endpoint'
export const GetUser =  async() =>{
    try {
        const res = await axios.get(`${Enpoint}users`)
        if(res){
            return res?.data
        }
    } catch (error) {
        return false;
    }
}