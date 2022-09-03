import { visitFiles, Directory, File } from "./visit-files";

const myFile3: File = {
  type: "file",
  name: "file 3",
};

const myDirectory: Directory = {
  type: "directory",
  name: "world",
  children: [myFile3],
};

const myFile: File = {
  type: "file",
  name: "file 1",
};
const myFile2: File = {
  type: "file",
  name: "aaaaaa",
};
const myDirectory2: Directory = {
  type: "directory",
  name: "world",
  children: [myFile2],
};

const myRoot: Directory = {
  type: "directory",
  name: "hello",
  children: [myDirectory2, myDirectory, myFile],
};

describe("visit file should work", () => {
  test("without filtering", () => {
    const result = visitFiles(myRoot, (_) => true);
    expect(result).toEqual([myFile, myFile2, myFile3]);
  });
  test("with a filter on a specific name", () => {
    const filter = (item: File) => item.name === "file 3";
    const result = visitFiles(myRoot, filter);
    expect(result).toEqual([myFile3]);
  });
  test("with a filter on single letter file name", () => {
    const result = visitFiles(myRoot, (file: File) => {
      const name = file.name;

      for (let i = 0; i < Math.floor(name.length) / 2; i++) {
        if (name[i] != name[name.length - 1 - i]) {
          return false;
        }
      }
      return true;
    });
    expect(result).toEqual([myFile2]);
  });
});
