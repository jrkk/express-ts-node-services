import { Router, Request, Response, NextFunction } from 'express';
import { UserService } from '../Services/userService';

const router = Router();
const userService = new UserService();

/**
 * GET /api/users
 * Get all users
 */
router.get('/', async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * GET /api/users/:id
 * Get user by ID
 */
router.get('/:id', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const userId = parseInt(req.params.id, 10);
    if (isNaN(userId) || userId <= 0) {
      res.status(400).json({
        success: false,
        error: {
          message: 'Invalid user ID',
        },
      });
      return;
    }

    const user = await userService.getUserById(userId);
    if (!user) {
      res.status(404).json({
        success: false,
        error: {
          message: 'User not found',
        },
      });
      return;
    }
    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

/**
 * POST /api/users
 * Create a new user
 */
router.post('/', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, firstName, lastName } = req.body;

    if (!email || !firstName || !lastName) {
      res.status(400).json({
        success: false,
        error: {
          message: 'Missing required fields: email, firstName, lastName',
        },
      });
      return;
    }

    const user = await userService.createUser(req.body);
    res.status(201).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
