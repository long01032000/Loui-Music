import axios from 'axios'
import {Enpoint} from './../Endpoint'
export const GetAllLikedSongs =  async() =>{
    try {
        const token = localStorage.getItem('token')
        const res = await axios.get(`${URL}list-like-music`,{
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if(res){
          return res.data?.listLike
        }
      } catch (error) {
        return false;
      }
}