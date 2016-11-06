function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("tiles", ev.target.id);
    ev.dataTransfer.setData("path", ev.target.src);

}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("tiles");
    ev.target.src = ev.dataTransfer.getData("path");
      var placement = ev.target.id;
      var tileId = {"tile_id": data}
      var url = "/placements/" + placement;
      $.ajax(url, {
          method: 'PUT',
          contentType: 'application/json',
          processData: false,
          data: JSON.stringify({
              tile_id: data
          })
      });

}