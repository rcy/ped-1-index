Template.projectList.projects = function () {
  return Projects.find({}, {sort: {createdAt: -1}});
};
