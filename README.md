# Express TypeScript Node Services

A production-ready boilerplate application built with Node.js, Express, and TypeScript. Perfect for building RESTful APIs with best practices and modern tooling.

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **ORM**: Sequelize
- **Database**: PostgreSQL
- **Testing**: Mocha & Chai
- **Linting**: ESLint
- **Formatting**: Prettier
- **Code Coverage**: NYC (Istanbul)

## 📁 Project Structure

```
express-ts-node-services/
├── src/
│   ├── Config/           # Application configuration files
│   ├── Controller/       # Route controllers (business logic)
│   ├── Entities/         # Sequelize models/entities
│   ├── Middleware/       # Express middleware functions
│   ├── Plugins/          # Plugin integrations
│   ├── Services/         # Business logic services
│   └── index.ts          # Application entry point
├── test/                 # Test files
├── .vscode/              # VS Code configuration
├── .cursorrules          # Cursor IDE rules
├── .cursorignore         # Cursor IDE ignore file
├── tsconfig.json         # TypeScript configuration
├── eslint.config.js      # ESLint configuration
├── .prettierrc           # Prettier configuration
├── .mocharc.json         # Mocha configuration
└── package.json          # Project dependencies and scripts
```

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/jrkk/express-ts-node-services.git
cd express-ts-node-services
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```env
NODE_ENV=development
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=express_db
DB_USERNAME=postgres
DB_PASSWORD=password
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm start
```

## 🧪 Testing

### Run Tests
```bash
npm test
```

### Watch Mode
```bash
npm run test:watch
```

### Code Coverage
```bash
npm run coverage
```

## 🔍 Linting and Formatting

### Lint Code
```bash
npm run lint
```

### Fix Linting Issues
```bash
npm run lint:fix
```

### Format Code
```bash
npm run format
```

### Check Formatting
```bash
npm run format:check
```

## 🐛 Debugging

### VS Code Debugger

This project includes VS Code debug configurations:

1. **Debug TypeScript**: Debug the main application
2. **Debug Current Test**: Debug the currently open test file
3. **Debug All Tests**: Debug all test files
4. **Attach to Process**: Attach debugger to a running process

Press `F5` or use the Debug panel in VS Code to start debugging.

## 📝 API Endpoints

### Health Check
```
GET /api/health
```

### Users (Example)
```
GET    /api/users      - Get all users
GET    /api/users/:id  - Get user by ID
POST   /api/users      - Create a new user
```

## 🎨 Code Style

- TypeScript strict mode enabled
- ESLint for code quality
- Prettier for code formatting
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required

## 🔧 IDE Support

### VS Code
The project includes VS Code settings for:
- Format on save
- ESLint auto-fix on save
- TypeScript IntelliSense
- Recommended extensions

### Cursor IDE
The project is fully compatible with Cursor IDE:
- `.cursorrules` file contains project-specific guidelines
- `.cursorignore` excludes unnecessary files

## 📦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build TypeScript to JavaScript |
| `npm start` | Run production build |
| `npm test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |
| `npm run coverage` | Generate test coverage report |
| `npm run lint` | Lint code with ESLint |
| `npm run lint:fix` | Fix linting issues automatically |
| `npm run format` | Format code with Prettier |
| `npm run format:check` | Check code formatting |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## 📄 License

ISC License

## 👤 Author

Your Name

## 🙏 Acknowledgments

- Express.js team
- TypeScript team
- Sequelize team
- All contributors
