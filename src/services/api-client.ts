import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-nba-v1.p.rapidapi.com/players'
})