const fs = require('fs');
const path = require('path');

const getDirectoryContents = (folderPath) => {
  const directoryContents = {
    files: [],
    folders: []
  };

  try {
    const fileNames = fs.readdirSync(folderPath);

    fileNames.forEach((fileName) => {
      const filePath = `${folderPath}/${fileName}`;
      const stats = fs.statSync(filePath);

      if (stats.isFile()) {
        directoryContents.files.push(fileName);
      } else if (stats.isDirectory()) {
        directoryContents.folders.push(fileName);
      }
    });
  } catch (error) {
    console.error('Error reading directory:', error);
  }

  return directoryContents;
};
