import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;
    try {
      const user = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(200).send(user);
    } catch (error) {
      return response.status(404).json({
        error: error.message || "Unexpected error.",
      });
    }
  }
}

export { TurnUserAdminController };
