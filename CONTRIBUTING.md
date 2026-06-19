# Contributing to NeuralStack

Thank you for your interest in contributing to NeuralStack! We welcome contributions from the community.

## Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn
- Git
- TypeScript knowledge

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Fork on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/neuralstack.git
   cd neuralstack
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Run tests**
   ```bash
   npm test
   ```

## Development Workflow

### Branch Naming
- Feature: `feature/description`
- Bug fix: `fix/description`
- Documentation: `docs/description`
- Performance: `perf/description`

### Making Changes

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, readable code
   - Follow TypeScript best practices
   - Add tests for new features
   - Update documentation

3. **Test your changes**
   ```bash
   npm test
   npm run lint
   npm run build
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature description"
   ```

   Follow [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat:` New feature
   - `fix:` Bug fix
   - `docs:` Documentation changes
   - `test:` Test changes
   - `refactor:` Code refactoring
   - `perf:` Performance improvements
   - `chore:` Build/tooling changes

5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to GitHub and create a PR
   - Describe your changes clearly
   - Link related issues
   - Wait for review

## Code Standards

### TypeScript
- Use TypeScript for all code
- Define proper types and interfaces
- Avoid `any` types when possible
- Use async/await instead of callbacks

### Formatting
- Use Prettier for code formatting
- Run `npm run format` before committing
- 2 spaces for indentation
- Single quotes for strings

### Testing
- Write tests for all new features
- Aim for >80% code coverage
- Use descriptive test names
- Test edge cases and error scenarios

### Error Handling
- Use try/catch blocks
- Log errors appropriately
- Return meaningful error messages
- Use proper HTTP status codes

## Project Structure

```
neuralstack/
├── src/
│   ├── controllers/    # Request handlers
│   ├── services/       # Business logic
│   ├── routes/         # API routes
│   ├── middleware/     # Express middleware
│   ├── utils/          # Utility functions
│   └── index.ts        # Entry point
├── tests/              # Test files
├── docs/               # Documentation
└── logs/               # Application logs
```

## Types of Contributions

### Bug Fixes
- Check existing issues first
- Describe the bug clearly
- Provide steps to reproduce
- Include fix in PR

### New Features
- Discuss in an issue first
- Ensure it aligns with project goals
- Add tests and documentation
- Update README if needed

### Documentation
- Fix typos and errors
- Improve clarity
- Add examples
- Update API docs

### Testing
- Add missing tests
- Improve test coverage
- Fix flaky tests
- Add E2E tests

## Pull Request Process

1. **Before submitting**
   - Run all tests: `npm test`
   - Run linter: `npm run lint`
   - Build successfully: `npm run build`
   - Update documentation

2. **PR Description**
   - What changes were made
   - Why changes were needed
   - How to test changes
   - Any breaking changes

3. **Review Process**
   - Maintainers will review your PR
   - Address feedback promptly
   - Keep PRs focused and small
   - Be patient and respectful

4. **After Approval**
   - PR will be merged by maintainers
   - Delete your feature branch
   - Pull latest changes to main

## Getting Help

- 💬 **Discord**: Join our community server
- 📧 **Email**: dev@neuralstack.com
- 🐛 **Issues**: GitHub Issues for bugs
- 💡 **Discussions**: GitHub Discussions for ideas

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on the code, not the person
- Report unacceptable behavior

## Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Mentioned in release notes
- Eligible for contributor badges
- Invited to maintainer team (active contributors)

## Questions?

Don't hesitate to ask! We're here to help:
- Open an issue with the "question" label
- Ask in GitHub Discussions
- Join our Discord community

Thank you for contributing to NeuralStack! 🚀
