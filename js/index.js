//fetch = Function used for making HTTP request to fetch images from Sketchfab API

const token = 'a00985e32d0949c18f2598f54e8741a0';
const searchTerm = '3d printer';

fetch('https://api.sketchfab.com/v3/search?type=models&q=${searchTerm}`, {
  headers: {
    Authorization: `Token ${token}`
  }
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Could not fetch image from Sketchfab API");
    }
    return response.json();
  })
  .then(data => {
    console.log(data.results);  
    displaySketchfabThumbnails(data.results);
  })
  .catch(error => console.error('Error fetching models:', error));

  function displaySketchfabThumbnails(models) {
    const container = document.getElementById('sketchfab-gallery');
    container.innerHTML = ''; 

    models.forEach(model => {
      const thumb = model.thumbnails.images[0].url;
      const title = model.name;
      const link = `https://sketchfab.com/models/${model.uid}`;

      const card = document.createElement('div');
      card.innerHTML = `
        <h4>${title}</h4>
        <a href="${link}" target="_blank">
          <img src="${thumb}" alt="${title}" width="200" height="200">
        </a>
      `;  

      container.appendChild(card);
    });
  }