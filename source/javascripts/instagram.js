$(document).ready(function() {

  var access_token = "16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587",
    access_parameters = { access_token: access_token };

  var getImages = function(user_id, count, access_parameters) {
    var url = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent?callback=?&count=' + count;
    $.getJSON(url, access_parameters, onDataLoaded);
  };

  var onDataLoaded = function(data) {
    // console.log(data);
    if (data.meta.code == 200) {
      insertImages(data.data);
    }
  }

  var insertImages = function(images) {
    var wrapper = $('#ig_images');
    var html = '<ul>';
    $.each(images, function(i, el) {
      var src = el.images.low_resolution.url,
        url = el.link;
      html += '<li>';
      html += '<a href="' + url + '">';
      html += '<img src="' + src + '" class="img-responsive img-thumbnail">';
      html += '</a>';
      html += '</li>';
    });
    html += '</ul>';
    wrapper.html(html);
  };

  getImages('16384709', 6, access_parameters);

});
