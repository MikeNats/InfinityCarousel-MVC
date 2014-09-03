var node1 = new app.nodeModel({
  url: "IamTheLink",
  title: "London Babe",
  imgTitle: "London Babe",
  src: "img/pic1.jpg"
});

var node2 = new app.nodeModel({
  url: "IamTheLink",
  title: "I Love London",
  imgTitle: "I Love London",
  src: "img/pic2.jpg"
});

var node3 = new app.nodeModel({
  url: "IamTheLink",
  title: "UK-London",
  imgTitle: "UK-London",
  src: "img/pic3.jpg"
});

var node4 = new app.nodeModel({
  url: "IamTheLink",
  title: "God Save the Queen",
  imgTitle: "God Save the Queen",
  src: "img/pic4.jpg"
});

var node5 = new app.nodeModel({
  url: "IamTheLink",
  title: "London Calling",
  imgTitle: "London Calling",
  src: "img/pic5.jpg"
});

var nodeGroup = new app.nodesCollection([node1, node2, node3, node4,node5]);

var nodesGroupView = new app.carouselView({ collection: nodeGroup});

$(".carousel").html(nodesGroupView.render().el);

