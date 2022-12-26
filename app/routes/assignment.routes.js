const controller = require("../controllers/assignment.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/assignments/:id",
    controller.getAssignment
  );

  app.get(
    "/api/assignments",
    controller.getAssignments
  );

  app.delete(
    "/api/assignments/:id",
    controller.deleteAssignment
  );

  app.post(
    "/api/assignments",
    controller.postAssignment
  );

  app.put(
    "/api/assignments",
    controller.updateAssignment
  );


};
