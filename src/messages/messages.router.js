const router = require('express').Router();
 

const messageServices = require("./messages.services");
const JwtPassport = require('../middlewares/passport.middleware')


router.route("/")
  .get(messageServices.getAllMessages)
  .post(messageServices.postNewMessage);



router.route('/me')
  .get(JwtPassport.authenticate('jwt', { session: false }), userServices.getMyUser)

router.route("/:id")
  .get(messageServices.getMessageById)
  .patch(MessageServices.patchMessage)
  .delete(MessageServices.deleteMessage);


module.exports = router