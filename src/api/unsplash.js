import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 1rCXpwEhbMetXIv53XLQ6Q8BlQXthC5Zod9q9cCJGDY',
  },
});
