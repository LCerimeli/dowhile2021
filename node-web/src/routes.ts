import { Router } from 'express'
import { authenticateUserController } from './controllers/authenticateUserController'
import { createMessageController } from './controllers/createMessageController'
import { getLast3MessagesController } from './controllers/getLast3MessagesController'
import { profileUserController } from './controllers/profileUserControlle'
import { ensureAuthenticated } from './middleware/ensureAuthenticated'

const router = Router()

router.post('/authenticate', new authenticateUserController().handle)

router.post('/messages', ensureAuthenticated, new createMessageController().handle)

router.get('/messages/last3', new getLast3MessagesController().handle)

router.get('/profile', ensureAuthenticated,new profileUserController().handle)

export { router }