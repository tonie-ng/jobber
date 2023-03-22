export const checkImageURL = (url: string) => {
  if (!url) {
    return false;
  } else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|gif|svg|bmp|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};
