const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    const dbFilePath = path.resolve(__dirname, '../db.json');

    if (!fs.existsSync(dbFilePath)) {
      throw new Error('DB file not found');
    }

    const data = fs.readFileSync(dbFilePath, 'utf8');
    return {
      statusCode: 200,
      body: data,
    };
  } catch (error) {
    console.error('Error reading db.json:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' }),
    };
  }
};
