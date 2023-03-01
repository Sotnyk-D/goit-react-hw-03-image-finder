import axios from 'axios';

export const FetchImages = async (query, page) => {
  const response = await axios.get(`https://pixabay.com/api/`, {
    method: 'get',
    params: {
      key: '33395330-543dfcfc57dd38064198ac425',
      q: query,
      image_tupe: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 12,
      page: page,
    },
  });
};
