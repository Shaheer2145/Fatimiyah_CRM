import newsNodes from '@/lib/mockData/news.json';

export const NewsService = {
    getLatest: async (limit = 3) => {
        // Logic: Sort by date (mock) and slice
        // Assuming mock data is already sorted for now or just slice
        return newsNodes.slice(0, limit);
    },

    getAll: async () => {
        return newsNodes;
    },

    getById: async (id) => {
        return newsNodes.find(n => n.id === parseInt(id));
    }
};
