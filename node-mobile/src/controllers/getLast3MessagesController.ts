import { Request, Response} from 'express'
import { createMessageService } from '../services/createMessageService'

import { io } from '../app'
import { getLast3MessagesService } from '../services/getLast3MessagesService'

class getLast3MessagesController {
  async handle(request: Request, response: Response) {
    const service =new getLast3MessagesService()

    const result = await service.execute()

    return response.json(result)
  }
}

export { getLast3MessagesController }