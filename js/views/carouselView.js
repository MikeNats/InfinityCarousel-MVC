var app = app || {};

app.carouselView = Backbone.View.extend({

  tagName: "ul",

  render: function() {
 	  this.collection.each(this.addNode, this);
 		return this;
  },

 addNode: function(node) {
 		var nodeView = new app.nodeView ({ model: node });
 		this.$el.append(nodeView.render().el);
 }

});