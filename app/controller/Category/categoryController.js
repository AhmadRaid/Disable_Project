const categoryController = require('./categoryController.js')
const { Category } = require('../../Model')

module.exports.getAllCategory = async (data) => {
    try {
        let category = await Category.find({})
        if (!category) {
            return { code: 1, message: "We dont have Category", data: null }
        }
        return { code: 0, message: 'commonSuccess.message', data: { category } };
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}

module.exports.addCategory = async (data) => {
    try {
        const { name, title, description } = data;
        let category = await Category.create({
            name : name,
            title : title,
            description : description
        })
        return { code: 0, message: 'commonSuccess.message', data: { category } };
    } catch (err) {
        console.log(err);
        throw new Error(err);
    }
}


module.exports.editCategory = async (data) => {
    const { name, title, description } = data;
    try {
        const category = await Category.findOne({
            name,
            title,
            description
        });

        if (!category) {
            return { code: 1, message: 'category.notFoundcategory', data: null };
        }

        category.name = name;
        category.title = title;
        category.description = description;

        await category.save();

        return { code: 0, message: 'commonSuccess.message', data: category };
    } catch (error) {
        console.log(err);
        throw new Error(err);
    }
}



module.exports.deleteCategory = async (data) => {
    const { name, title, description } = data;
    try {
        const category = await Category.findOne({
            name,
            title,
            description
        });

        if (!category) {
            return { code: 1, message: 'category.notFoundcategory', data: null };
        }

        Category.deleteOne({
            name,
            title,
            description
        })

        return { code: 0, message: 'commonSuccess.message', data: category };
    } catch (error) {
        console.log(err);
        throw new Error(err);
    }
}


module.exports.viewCategoryDetails = async (data) => {
    const { name, title, description } = data;
    try {
        const category = await Category.findOne({
            name,
            title,
            description
        }).select('-__v');

        if (!category) {
            return { code: 1, message: 'category.notFoundcategory', data: null };
        }

        return { code: 0, message: 'commonSuccess.message', data: category };
    } catch (error) {
        console.log(err);
        throw new Error(err);
    }
}