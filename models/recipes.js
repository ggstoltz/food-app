module.exports = function (sequelize, DataTypes) {
    var Recipes = sequelize.define("Recipes", {
        author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        recipeName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        ingredients: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        },
        steps: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    return Recipes;
};