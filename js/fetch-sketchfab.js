//fetch = Function used for making HTTP request to fetch images from Sketchfab API

const token = 'a00985e32d0949c18f2598f54e8741a0';

// --DOM References-------------------------------------------------
const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const gallery = document.getElementById('sketchfab-gallery');
const apiUrl = 'https://api.sketchfab.com/v3/search?type=models&q=';

searchBtn.addEventListener('click', function() {
    const query = searchBox.value.trim();

    if (!query) {
        alert('Please enter a printer name to search.');
        return;
    }

fetch(`https://api.sketchfab.com/v3/search?type=models&q=${encodeURIComponent(query)}`, {
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
    gallery.innerHTML = ''; // Clear previous results

    data.results.forEach(model => {
      const thumb = model.thumbnails.images[0].url;
      const title = model.name;
      const uid = model.uid;

      const card = document.createElement('div');
      card.className = 'card text-center p-2';    
      card.style.width = '200px';

      card.innerHTML = `
        <img src="${thumb}" class="card-img-top" alt="${title}">
        <div class="card-body">
            <h6 class="card-title">${title}</h6>
            <button class="btn btn-primary" onclick="loadInViewer('${uid}')">View Model</button>
      </div>
        `;

      gallery.appendChild(card);
    });
  })

  .catch(err => {
    console.error('Error fetching models:', err);
    gallery.innerHTML = '<p class="text-danger">Failed to fetch models. Please try again later.</p>';
  });
});