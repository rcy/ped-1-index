Handlebars.registerHelper('input', function (options) {
  check(options.hash, Match.ObjectIncluding({type: String, collection: String, field: String }));

  var data = { doc: this, type: options.hash.type, collection: window[options.hash.collection], field: options.hash.field };
  return new Handlebars.SafeString(Template.input(data));
});

function eventValue(ev) {
  return $(ev.currentTarget).val().trim();
}

Template.input.helpers({
  value: function () {
    return this.doc[this.field];
  }
});

Template.input.events({
  'change': function (ev, tpl) {
    var value = eventValue(ev);
    var mod = {$set: {}};
    mod.$set[this.field] = value;
    this.collection.update({_id: this.doc._id}, mod);
  }
});
