const iframe = document.getElementById('api-iframe');
const client = new Sketchfab('1.12.1', iframe);

function loadInViewer(uid, {autostart = true} = {}) {

  client.init(uid, {
    autostart, 
    success: function (api) {
      api.start();
      api.addEventListener('viewerready', function() {
        console.log('Viewer is ready for model:', uid);
      });
    }, 
    error: function() {
        console.error('Sketchfab Viewer did not load.');
        }
    });
}
    