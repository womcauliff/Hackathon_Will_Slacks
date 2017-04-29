var Comment = sequelize.define("Comment",
  //model definition
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  },
  //options
  {
    classMethods: {
      association: function(models) {
        Comment.belongsTo(models.Message, {
          foreignKey: {
            allowNull: false
          }
        });
      }
    }
  }
);
return Comment;