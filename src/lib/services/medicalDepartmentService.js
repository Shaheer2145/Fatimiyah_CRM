import departments from '@/lib/mockData/departments.json';

export const MedicalDepartmentService = {
    getAll: async () => {
        // In a real app, this would be a DB call
        return departments;
    },

    getById: async (id) => {
        return departments.find(d => d.id === parseInt(id));
    }
};
