const getDropDownClasses = (theme, lists, pathname) => {
  const isActive = lists?.map((list) => list.path).includes(pathname);

  if (theme === "dark") {
    return isActive
      ? "rounded-md dark:bg-blue-600 dark:text-slate-100 after:absolute after:right-[-.7rem] after:h-full after:w-1 after:rounded-l-lg after:bg-blue-500"
      : "dark:hover:bg-gray-700 dark:text-slate-300";
  }

  return isActive
    ? "rounded-md bg-blue-100 text-blue-500 after:absolute after:right-[-.7rem] after:h-full after:w-1 after:rounded-l-lg after:bg-blue-500"
    : "hover:bg-slate-100 text-slate-800";
};

export default getDropDownClasses;
