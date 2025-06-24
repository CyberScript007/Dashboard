const getItemClasses = (theme, active, item) => {
  const isActive = active === item;

  if (theme === "dark") {
    return isActive
      ? "dark:text-blue-500 dark:bg-indigo-900"
      : "text-slate-300 hover:bg-slate-800";
  }

  return isActive
    ? "text-blue-500 bg-blue-100"
    : "text-gray-700 hover:bg-slate-100";
};

export default getItemClasses;
