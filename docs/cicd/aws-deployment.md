# Continuous Integration and Deployment with AWS

## Services Overview

- **GitHub** - Free!
- **GitHub Actions** Free!
- **AWS** - Free, but credit card required!

## GitHub Setup

![github setup](./images/github-setup.excalidraw.png)

### GitHub Actions

GitHub Actions uses YAML files to define workflows, which are automated sequences that execute one or more jobs. Each job consists of steps that run on the same runner, a virtual machine. These steps can execute commands, perform setup tasks, or run specific actions. GitHub Actions is built around four key concepts: triggers (when to run), jobs (what to do), steps (how to do it), and actions (reusable units of code).

#### Folder Structure

```bash
  project-root/
  ├── .github/
  │   └── workflows/
  │       └── main.yml
  └── (rest of your project files)
```

#### GitHub Actions Flow

![gha flow](./images/gha-flow.excalidraw.png)
