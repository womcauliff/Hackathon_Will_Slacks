module.exports = function(sequelize, DataTypes) {
  var Message = sequelize.define("Message",
  //model definition
  {
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    channel: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    ts: {
      type: DataTypes.DATE,
      allowNull: false
    }
  },
  //options
  {
    classMethods: {
      association: function(models) {
        Message.hasMany(models.Comment, {
          onDelete: "cascade"
        });
      }
    },
    timestamps: false
  });
  return Message;
};
