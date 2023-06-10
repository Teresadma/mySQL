const {Router} = require ("express");
const router = Router();
const asignaturasCtrl = require("../controller/asignaturas.controller");

router.get("/media/:student_id", asignaturasCtrl.getMediaAl);
router.get("/apuntadas/:student_id", asignaturasCtrl.getAsignaturas);
router.get("/apuntadas", asignaturasCtrl.getAlumnos);
router.get("/impartidas/:teacher_id", asignaturasCtrl.getImpartidasID);
router.get("/impartidas", asignaturasCtrl.getImpartidas);


module.exports = router;