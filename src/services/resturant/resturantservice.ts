import camelize from "camelize";
import { mockImages, mocks } from "./mock";

export const resturantsRequest = async (location: keyof typeof mocks) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) reject("not found");
    resolve(mock);
  });
};

export const resturantTransform = (results: any) => {
  const mappedResult = results.results.map((res: any) => {
    res.photos = res.photos.map((p: any) => {
      return mockImages[Math.ceil(Math.random() * mockImages.length - 1)];
    });
    return {
      ...res,
      isClosedTemporarily: res.business_status === "CLOSED_TEMPORARILY",
      isOpeningNow: res.opening_hours && res.opening_hours.open_now,
      address: res.vicinity,
    };
  });
  const newResult = camelize(mappedResult);
  return newResult;
};
