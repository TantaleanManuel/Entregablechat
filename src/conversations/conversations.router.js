const router = require('express').Router();
 

const conversationServices = require("./conversations.services");
const JwtPassport = require('../middlewares/passport.middleware')

router.route("/")
  .get(conversationServices.getAllConversations)
  .post(conversationServices.postNewConversation);

router.route('/me')
  .get(JwtPassport.authenticate('jwt', { session: false }), conversationServices.getMyConversation)

router.route("/api/v1/conversations/:conversation_id")
  .get(conversationServices.getConversationById)
  .patch(conversationServices.patchConversation)
  .delete(conversationServices.deleteConversation);


module.exports = router