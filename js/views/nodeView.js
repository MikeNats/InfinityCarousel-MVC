var app = app || {};

app.nodeView = Backbone.View.extend({

  tagName: "li",

  template: _.template( $("#appendCarousel").html() ),

  render: function() {
    var nodeTemplate = this.template(this.model.toJSON());
    this.$el.html(nodeTemplate);
    return this;
  }

});