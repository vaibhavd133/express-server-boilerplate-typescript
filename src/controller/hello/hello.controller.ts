import { Request, Response } from 'express';
import { Hello } from '../../services/index';

class HelloController {
  public static hello(req: Request, res: Response): void {
    res.json({ message: Hello.sayHello() });
  }
}

export { HelloController };
