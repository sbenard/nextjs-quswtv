export type File = {
  type: "file";
  name: string;
};

export type Directory = {
  type: "directory";
  name: string;
  children: (File | Directory)[];
};

const isFile = (item: File | Directory): item is File => {
  return item.type === "file";
};
const isDirectory = (item: File | Directory): item is Directory => {
  return item.type === "directory";
};

/**
 * Traverse files & directories.
 *
 * Return a list of every files filtered by given function.
 */
export const visitFiles = (
  root: Directory,
  filterFn: (item: File) => boolean
): File[] => {
  const files = root.children.filter(isFile);
  const directories = root.children.filter(isDirectory);

  let allFiles: File[] = [...files];
  for (let child of directories) {
    if (isFile(child)) {
      allFiles.push(child);
    } else {
      allFiles = [...allFiles, ...visitFiles(child, filterFn)];
    }
  }

  return allFiles.filter(filterFn);
};

// Example moved to visit-file.test.ts ""with a filter on single letter file name"
