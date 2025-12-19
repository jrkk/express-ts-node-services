import express, { Application } from 'express';
import { config } from './Config/app.config';
import { errorHandler } from './Middleware/errorHandler';
import { logger } from './Middleware/logger';
import healthRouter from './Controller/healthController';

const app: Application = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routes
app.use('/api/health', healthRouter);

// Error handling middleware (should be last)
app.use(errorHandler);

const PORT = config.port || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${config.environment}`);
});

export default app;
