import axios from 'axios';

const searchImages = () => {
  // unsplash API
  axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: 'Client-ID dH6qm1K4On60C8S-yl3iHUYSyfqGeKLZzAmq1nvjU1c',
    },
    params: {
      query: 'cars',
    },
  });
};