import fs from 'fs/promises';
import path from 'path';
import { directory } from '../directory.js';

class Person {
  constructor(Name, Type) {
    this.Name = Name;
    this.Type = Type;
  }
}

export const ls = async () => {
  const currentPath = directory();
  const files = await fs.readdir(currentPath);
  const fileDetails = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(currentPath, file);
      const stats = await fs.lstat(filePath);
      return new Person(file, stats.isDirectory() ? 'directory' : 'file');
    })
  );
  fileDetails.sort((a, b) => {
    if (a.Type === b.Type) {
      return a.Name < b.Name ? -1 : a.Name > b.Name ? 1 : 0;
    }
    return a.Type === 'directory' ? -1 : 1;
  });
  console.table(fileDetails);
};
