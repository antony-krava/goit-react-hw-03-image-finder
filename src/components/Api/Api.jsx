import axios from 'axios';

const API_KEY = '20799559-c9685ab0b6001e1a4eb2b3732';
const BASE_URL = 'https://pixabay.com/api/';
const fetchImages = ({ searchQuery = '', currentPage = 1, pageSize = 12 }) => {
    return axios.get(`${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`).then(response => response.data.hits);
};

export default { fetchImages };