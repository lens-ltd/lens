import axios from 'axios';

const downloadHelper = async (url, name) => {
    axios
      .get(
        url,
        { responseType: 'blob' } // Set the response type to 'blob'
      )
      .then((response) => {
        const blob = new Blob([response.data], { type: 'application/pdf' }); // Create a blob from the response data
        const url = window.URL.createObjectURL(blob); // Generate a URL for the blob
        const a = document.createElement('a');
        a.href = url;
        a.download = name;
        a.click();
        window.URL.revokeObjectURL(url); // Clean up the URL object
      })
      .catch((error) => {
        console.log(error);
      });
  };

export default downloadHelper;