const router = require('express').Router();
 

const participantServices = require("./participants.services");
const JwtPassport = require('../middlewares/passport.middleware')


router.route("/")
  .get(participantServices.getAllParticipants)
  .post(participantServices.postNewParticipant);



router.route('/me')
  .get(JwtPassport.authenticate('jwt', { session: false }), participantServices.getMyParticipant)

router.route("/:id")
  .get(participantServices.getParticipantById)
  .patch(participantServices.patchParticipant)
  .delete(participantServices.deleteParticipant);


module.exports = router