var cats = [
  {
    name: 'boba',
    favouriteFood: 'Sock fluff',
    image: 'http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg'
    imageSize: '500'
  },{
    name: Baranaby,
    favouriteFood: Tuna,
    image: "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg",
    imageSize: '500'
  },{
    name: 'Max', 
    favouriteFood: 'Whiskas',
    image: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg",
    imageSize: '500'
  }
]


var createList = function(array){
  var list = document.createElement('ul');
  for(var i = 0; i < array.length; i++) {
          var item = document.createElement('li');
          item.appendChild(document.createTextNode(array[i]));
          list.appendChild(item);
      }
}



var app = function(){



}


window.onload = app;