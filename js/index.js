//fetch = Function used for making HTTP request to fetch images from Sketchfab API

const token = 'a00985e32d0949c18f2598f54e8741a0';
const searchTerm = '3d printer';

fetch("https://api.sketchfab.com/v3/search?type=models&q=robot", {
  headers: {
    Authorization: `Token ${token}`
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not fetch data from Sketchfab API");
    }
    return response.json();
  })
  .then(data => {
    console.log(data.results);  
    displaySketchfabThumbnails(data.results);
  })
  .catch(error => console.error('Error fetching models:', error));