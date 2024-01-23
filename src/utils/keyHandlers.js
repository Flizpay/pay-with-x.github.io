export const keyDownHandler = (targetKey, action) => {
  return (event) => {
    if (event.key === targetKey) {
      event.preventDefault();
      action();
    }
  };
};