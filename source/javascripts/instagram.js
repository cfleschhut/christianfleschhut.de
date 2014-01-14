var InstagramGallery = function(user_id, count, container) {
  var user_id = user_id,
    count = count,
    wrapper = $(container);

  var access_token = "16384709.6ac06b4.49b97800d7fd4ac799a2c889f50f2587",
    access_parameters = { access_token: access_token };

  var getImages = function() {
    var url = 'https://api.instagram.com/v1/users/' + user_id + '/media/recent?callback=?&count=' + count;
    $.getJSON(url, access_parameters, onDataLoaded);
  };

  var onDataLoaded = function(data) {
    // console.log(data);
    if (data.meta.code == 200) {
      insertImages(data.data);
    }
  };

  var insertImages = function(items) {
    var html = '<ul>';
    $.each(items, function(index, item) {
      var src = item.images.low_resolution.url,
        url = item.link;
      html += '<li>';
      html += '<a href="' + url + '">';
      html += '<img src="' + src + '" class="img-responsive img-thumbnail">';
      html += '</a>';
      html += '</li>';
    });
    html += '</ul>';
    wrapper.html(html);
  };

  return {
    init: getImages
  }
};

$(document).ready(function() {

  if ($('#ig_images').length) {
    var instagramGallery = new InstagramGallery('16384709', 6, '#ig_images');
    instagramGallery.init();
  }

});
