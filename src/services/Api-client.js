import axios from 'axios';

const IAMBaseUrl = 'https://matshelonyane.com/api/iam/v1';
const FleetBaseUrl = 'https://matshelonyane.com/api/fleet/v1';


export const IAMApiClient = axios.create({ baseURL: IAMBaseUrl });
export const FleetApiClient = axios.create({ baseURL: FleetBaseUrl });
