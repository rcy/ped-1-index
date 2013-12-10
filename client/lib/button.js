Handlebars.registerHelper('button', function (options) {
  check(options.hash, Match.ObjectIncluding({action: String, label: String}));

  var data = { action: options.hash.action, label: options.hash.label, doc: this };
  return new Handlebars.SafeString(Template.button(data));
});

Button = function (template, action, fn) {
  var handler = {};
  handler['click [data-action='+action+']'] = function (ev, tpl) {
    _.bind(fn, this.doc, ev, tpl)();
  };
  template.events(handler);
};
