export const getBase64 = (file: any) => {
  return new Promise((resolve) => {
    let baseURL: string | ArrayBuffer | null = "";
    const reader = new FileReader();

    if (reader) {
      reader.readAsDataURL(file);

      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    }
  });
};
