import axios from 'axios';

const BaseUrl = 'http://13.244.157.212/api/iam/v1/';

export default axios.create({ baseURL: BaseUrl });
