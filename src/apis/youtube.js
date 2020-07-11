import axios from 'axios';

const KEY = 'AIzaSyAysb7ejZCyPC2qoms-vnbfvMkLVh-KPT4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`,
  }
});
