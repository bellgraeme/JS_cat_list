var cats = [
  {
    name: 'boba',
    favouriteFood: 'Sock fluff',
    image: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg',
    imageWidth: '500'
  },{
    name: 'Baranaby',
    favouriteFood: 'Tuna',
    image: "http://static.tumblr.com/4d57a7a32617d66936094dd0c858258b/txrsv9l/QkWn1eqmy/tumblr_static_cute-cat-image.jpg",
    imageWidth: '500'
  },{
    name: 'Max', 
    favouriteFood: 'Whiskas',
    image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg",
    imageWidth: '500'
  }
]

var createList = function(){
  var list = document.createElement('ul');
  list.classList.add('cat');
  return list;
}

var createListItem= function(text){
  var li = document.createElement('li');
    li.innerText = text;
    return li;
}

var createImage = function(imageUrl , imageWidth){
  var imageLi = document.createElement('li');
  var image = document.createElement('img');
  image.src = imageUrl;
  image.width = imageWidth;
  imageLi.appendChild(image);
  return imageLi;
}

var appendElements = function(list, name, favouriteFood,image){
  list.appendChild(name);
  list.appendChild(favouriteFood);
  list.appendChild(image);
  var catsSection = document.getElementById('cats');
  catsSection.appendChild(list);
}

var addCat = function(name, favouriteFood, image, imageWidth ){
  var list = createList();
  var name = createListItem(name);
  var favouriteFood = createListItem(favouriteFood);
  var image = createImage(image, imageWidth);
  appendElements(list, name, favouriteFood, image);
}


var app = function(){
  cats.forEach(function(cat){
    addCat(cat.name, cat.favouriteFood, cat.image ,cat.imageWidth)
  })
}


window.onload = app;