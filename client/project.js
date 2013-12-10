Template.project.helpers({
  editing: function () {
    return Session.equals('editing', this._id);
  }
});

Button(Template.project, 'edit', function () {
  Session.set('editing', this._id);
});

Button(Template.project, 'done', function () {
  Session.set('editing');
});
Button(Template.project, 'delete', function () {
  if (confirm('you sure?')) {
    Projects.remove({_id: this._id});
    Session.set('editing');
  }
});


// Template.project.buttons({
//   'edit': function () {
//     Session.set('editing', this._id);
//   },
//   'done': function () {
//     Session.set('editing');
//   }
// });
