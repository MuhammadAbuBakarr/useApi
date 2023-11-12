import React, { useEffect } from "react";
import useApi from "./useApi";

const UsingHookExample = () => {
  // Example of GET Call
  const {
    apiCall, // Api Call Function
    loading, // Loading Boolean
    response, // API Response Initial Value = null
    error, // API Error Initial Error Value = null
  } = useApi("GET"); // Add REST API Method Here, GET,POST,PUT,PATCH,DELETE

  //Example of POST Call
  const {
    apiCall: postCall,
    loading: postLoading,
    response: postResponse,
    error: postError,
  } = useApi("POST"); // Set REST API Method to POST

  // Calling GET API Call
  useEffect(() => {
    apiCall("/get-call");
  }, []);

  // Handle GET Call Loading
  if (loading) {
    return <div>Loading...</div>;
  }
  const handleSubmit = () => {
    postCall(
      "/post-call",
      // Payload For Post Call
      {
        name: "AbuBakar",
      }
    );
  };
  return (
    <div>
      {/* No Need to Store API Response in State You can Render directly In DOM */}
      {response?.data?.map((item) => (
        <div>{item}</div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default UsingHookExample;
