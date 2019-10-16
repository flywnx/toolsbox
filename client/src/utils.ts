export default {
  // 函数节流
  debounce(obj: any, type: string, time = 300): boolean {
    if (!obj[type]) {
      obj[type] = true;
      setTimeout(() => {
        obj[type] = false;
      }, time);
      return true;
    } else {
      return false;
    }
  }
};
