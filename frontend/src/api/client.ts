import config from '../config.ts';
import { create } from 'apisauce';

const apiClient = create({
    baseURL: config.apiUri,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default apiClient;
