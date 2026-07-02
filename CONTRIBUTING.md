*Đọc bằng ngôn ngữ khác: [Tiếng Việt](CONTRIBUTING.vi.md).*

# Contributing to VietQR

First off, thank you for considering contributing to VietQR! It's people like you that make VietQR such a great tool for the community.

## Project Structure & Source Code

VietQR operates as a **closed-source project with public distribution**. 

The repository you are currently viewing (`github.com/zeforc/viet-qr`) serves as the public distribution hub and issue tracker. It contains the compiled build artifacts (`dist/` folders) and package configurations for NPM publishing.

**Because the core source code is kept private, we do not accept direct Pull Requests (code changes) from forks of this repository.**

## How to Contribute

Even though the source code is private, there are many ways you can actively contribute to the project!

### 1. Report Bugs 🐛
If you find a bug, please [open an issue](https://github.com/zeforc/viet-qr/issues) on GitHub. 
Provide as much detail as possible to help us reproduce and fix it:
- What you were trying to do.
- What actually happened.
- Steps to reproduce the issue.
- Your environment (Framework, Version, Browser, etc.).

### 2. Request Features 💡
Have an idea to make VietQR better? We'd love to hear it!
[Open a feature request](https://github.com/zeforc/viet-qr/issues) and explain:
- What the feature is.
- Why it would be useful.
- Any examples of how it should work.

### 3. Join Discussions 💬
You can help others and share your ideas in our [Community Discussions](https://github.com/zeforc/viet-qr/discussions). 
- Answer questions from other developers.
- Share how you use VietQR in your own projects.
- Discuss upcoming features or architectural ideas.

## Development Workflow (Core Team Only)

For internal team members who have access to the private monorepo:
1. Clone the private repository.
2. Ensure you have `pnpm` (v8+) and `Node.js` (v18+) installed.
3. Run `pnpm install` and `pnpm run dev` to start the local environment.
4. All code changes must have `vitest` unit tests and pass `pnpm build` before merging.
5. Create a PR on the private repository for review.

---

Thank you for being a part of the VietQR community!
