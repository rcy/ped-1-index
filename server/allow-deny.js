function isAdmin (userId) {
  var user = Meteor.users.findOne(userId);
  return user && user.profile.email === 'rcyeske@gmail.com';
}

Meteor.startup(function () {
  Projects.allow({
    insert: isAdmin,
    update: isAdmin,
    remove: isAdmin
  });
});
