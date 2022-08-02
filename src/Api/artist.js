import axios from 'axios'
import {Enpoint} from './../Endpoint'
export const GetAllArtist =  async() =>{
    try {
        const res = await axios.get(`${Enpoint}get-all-artist`)
        if(res){
            return res?.data
        }
    } catch (error) {
        return false;
    }
}