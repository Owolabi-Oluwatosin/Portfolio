import { PageInfo } from "../typings";

export const fetchPageInfo = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`,
    );

    const data = await res?.json();
    if (isPageInfo(data.pageInfo)) {
      return data.pageInfo;
    } else {
      // Handle the case when the API response is not of type PageInfo
      console.error("Invalid PageInfo received from the API");
      return {} as PageInfo; // You can provide a default PageInfo or handle this case differently
    }
  } catch (error) {
    console.log(error);
  }
};

// Type guard to check if the object is of type PageInfo
const isPageInfo = (obj: any): obj is PageInfo => {
  return (
    obj &&
    typeof obj._type === "string" &&
    typeof obj.address === "string" &&
    typeof obj.backgroundInformation === "string" &&
    typeof obj.email === "string" &&
    typeof obj.role === "string" &&
    typeof obj.heroImage === "object" &&
    typeof obj.profilePic === "object" &&
    typeof obj.name === "string" &&
    typeof obj._updatedAt === "string" &&
    typeof obj._id === "string" &&
    typeof obj._rev === "string" &&
    typeof obj.phoneNumber === "string"
  );
};
