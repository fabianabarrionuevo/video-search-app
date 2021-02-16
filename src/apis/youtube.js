import axios from 'axios';

const KEY ='AIzaSyCbN22BcSV0GWCxH7UQ2_cATVJkxw5SaWY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
});