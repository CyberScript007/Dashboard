const flattendChildren = function (data) {
  return data.reduce((acc, item) => {
    if (item.childrens) {
      return acc.concat(flattendChildren(item.childrens));
    } else {
      return acc.concat(item);
    }
  }, []);
};

export default flattendChildren;
