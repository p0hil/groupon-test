import { dealsApi } from '../api/deals.ts';

export const useApi = () => {
    return {
        deals: dealsApi,
    }
};
