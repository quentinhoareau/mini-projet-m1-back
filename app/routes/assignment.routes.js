const controller = require("../controllers/assignment.controller");
const { authJwt } = require("../middlewares");

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
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.deleteAssignment
  );

  app.post(
    "/api/assignments",
    [authJwt.verifyToken, authJwt.isUserOrAdmin],
    controller.postAssignment
  );

  app.put(
    "/api/assignments",
    [authJwt.verifyToken, authJwt.isUserOrAdmin],
    controller.updateAssignment
  );


};
