module.exports = function(sequelize, DataTypes) {
  var Slacks = sequelize.define("way", {
    text: {
      type: DataTypes.TEXT,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false,
      // len is a validation that checks that our todo is between 1 and 140 characters
    },
    timestamp: {
      type: DataTypes.DATE,
      // defaultValue is a flag that defaults a new todos complete value to false if
      // it isn't supplied one
      defaultValue: false
    },
    channel: {
      type: DataTypes.STRING,
      allowNull: false, 
    }
  });
  return "way";

  var Comments = sequelize.define("comment", {
    username: {
    type: DataTypes.STRING,
      // AllowNull is a flag that restricts a comment from being entered if it doesn't
      // have a text value
      allowNull: false
    },
    timestamp: {
      type: DataTypes.DATE,
      allowNull: false
    },
    message_id: {
      type: DataTypes.INTEGER,
      // AllowNull is a flag that restricts a todo from being entered if it doesn't
      // have a text value
      allowNull: false
    },
    text: {
    type: DataTypes.TEXT,
      // AllowNull is a flag that restricts a comment from being entered if it doesn't
      // have a text value
      allowNull: false,
    }
  });
  return "comment";
};
