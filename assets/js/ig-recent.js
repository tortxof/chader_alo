function igCallback (data) {
  var link = data.data[0].link;
  var img_url = data.data[0].images.thumbnail.url;
  var img_width = data.data[0].images.thumbnail.width;
  var img_height = data.data[0].images.thumbnail.height;
  $('#ig-recent').find('img').attr('src', img_url);
}
