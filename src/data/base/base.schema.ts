import { DataTypes } from 'sequelize';

export const SchemaFactory = (
  schemaFields: any
) => {
  if (!schemaFields || Object.keys(schemaFields).length === 0) {
    throw new Error('Please specify schemaFields');
  }

  return {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      field: 'ID'
    },
    ...schemaFields,
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
      field: 'CREATED_AT'
    },
    updated_at: {
      allowNull: true,
      type: DataTypes.DATE,
      field: 'UPDATED_AT'
    },
    deleted_at: {
      allowNull: true,
      type: DataTypes.DATE,
      field: 'DELETED_AT'
    }
  };
};
