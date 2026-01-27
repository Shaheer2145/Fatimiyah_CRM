import faqData from '@/lib/mockData/faq.json';

export const FAQService = {
    getAll: async () => {
        return faqData;
    }
};
