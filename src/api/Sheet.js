import axios from "axios";

export const fetchSheetData = async () => {
  const url = `https://script.googleusercontent.com/macros/echo?user_content_key=eiVWb8IXgwBx_xnpJw-1Nlt-IQqgFx2Of3wfkKb2C-MYPOijusNRJnRXxyxVRqHRrPRFN_tDLmrC3K8LKPtNXAvhmzsrFv9qm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKKGXrySfUntSvLDUDtmw3OS5248Tw4li1EOVKvoe3NB7WX1Chqhw0Nd15DiP2tVqclMbkrxCPFxy9Mmy7NS8YMF0e9IfztvkNz9Jw9Md8uu&lib=MTniwo2bxFVj4duoB2TtC9FCgviWAwpXC`;
  try {
    const response = await axios.get(url);
    const data = response.data.values;
    console.log(data)
    
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
