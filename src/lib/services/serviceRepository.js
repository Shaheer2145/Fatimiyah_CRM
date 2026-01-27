import servicesData from '@/lib/mockData/services.json';

export const ServiceRepository = {
    getAll: async () => {
        return servicesData;
    },

    get247Services: async () => {
        return servicesData.filter(s => s.title.includes('24/7'));
    }
};
