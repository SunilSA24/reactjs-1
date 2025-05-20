import React, { useEffect, useState } from "react";

function GetData() {
  // using state management, manage
  // error, loading and success states
  const [data, stateUser] = useState(null);
  const url = "https://jsonplaceholder.typicode.com/users/1"
  

  async function fetchData() {
    // complete the code here
    const response = await fetch(url);
    console.log('json', response);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    console.log('json', json);
    stateUser(json);
  }


  // call the fetch data function when the
  // page loads
  useEffect(()=> {
    fetchData();
  }, []);

  // Here is the basic data boilerplate
  return (
    <>
      {/* do not edit the code below this line */}
      
      {data === null ? <h2>Loading data…</h2> :
      <>
        <h2>Name: {data.name}</h2>
        <h2>Email: {data.email}</h2>
        <h2>Username: {data.username}</h2>
      </>
      }   
    </>
  );
}

export default GetData;