var $h1 = $('h1');
var $ul = $('ul');

$ul.addClass('designer-list');

designers.forEach(function (designer) {
  var $li = $('<li>');
  var $figure = $('<figure>');
  var $img = $('<img>');
  var $caption = $('<figcaption>');

  $caption.html(designer.name);
  $img.attr('src', 'img/' + designer.img);

  $figure.append($img, $caption);
  $li.append($figure);
  $ul.append($li);
});
