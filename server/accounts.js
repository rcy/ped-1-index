Accounts.onCreateUser(function (options, user) {
  user.profile = {email: user.services.persona.email};
  return user;
});
