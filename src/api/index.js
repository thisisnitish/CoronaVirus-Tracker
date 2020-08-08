import axios from 'axios';

const URL = 'https://covid.mathdro.id/api';

export const fetchData = async () => {
   try{
       const response = await axios.get(URL);
       return response;
   }
   catch(error){

   } 
}
