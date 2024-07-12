const categories = [];

const getAllCategories = () => categories;

const getCategoryById = (id) => categories.find(category => category.id === id);

const createCategory = (category) => {
    categories.push(category);
    return category;
};

const updateCategory = (id, updatedCategory) => {
    const index = categories.findIndex(category => category.id === id);
    if (index !== -1) {
        categories[index] = { ...categories[index], ...updatedCategory };
        return categories[index];
    }
    return null;
};

const deleteCategory = (id) => {
    const index = categories.findIndex(category => category.id === id);
    if (index !== -1) {
        return categories.splice(index, 1);
    }
    return null;
};

module.exports = {
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};
