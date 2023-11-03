import axios from 'axios';

const BaseUrl = 'https://matshelonyane.com/api/iam/v1/';

export default axios.create({ baseURL: BaseUrl });
