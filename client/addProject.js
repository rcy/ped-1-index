Template.addProject.creating = function () {
  return Session.get('creating');
};
Template.addProject.events({
  'click button': function () {
    Session.set('creating', true);
  },
  'change input[name=name]': function (e) {
    var name = $(e.currentTarget).val();
    Projects.insert({name: name, createdAt: new Date()}, function (err, result) {
      if (err)
        throw err;
      Session.set('creating');
    });
  }
});
