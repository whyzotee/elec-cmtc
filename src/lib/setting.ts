const isProd = process.env.NODE_ENV === "development";

export const basePath = isProd ? "http://localhost" : "https://elec.cmtc.ac.th";