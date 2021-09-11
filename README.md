![Master main flow](https://github.com/Al-un/ci-github-actions/actions/workflows/main.yaml/badge.svg) 
[![Chromatic](https://github.com/Al-un/ci-github-actions/actions/workflows/chromatic.yaml/badge.svg)](https://master--613c33aa6a019e003a9e8764.chromatic.com/)

# ci-github-actions

Testing Github Actions on a Vue 3 project:

- [x] Setup Github action 101: https://github.com/Al-un/ci-github-actions/pull/1

  - [Doc: Quickstart](https://docs.github.com/en/actions/quickstart)
  - [Doc: Overview](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
  - [Doc: Node.js build and test](https://docs.github.com/en/actions/guides/building-and-testing-nodejs?learn=continuous_integration)
  - [Doc: Workflow badge](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)

- [x] Improve with Parallel jobs (Like CircleCI fanning out) https://github.com/Al-un/ci-github-actions/pull/2

  - [Doc: Creating a composite action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action?learn=create_actions)
  - [Doc: `runs` for composite actions](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)
  - [GitHub Blog: Reduce duplication with action composition](https://github.blog/changelog/2021-08-25-github-actions-reduce-duplication-with-action-composition/)
  - [Article: Stop wasting your time and create reusable actions](https://dev.to/n3wt0n/github-composite-actions-nest-actions-within-actions-3e5l)
  - [Article: dependent jobs](https://www.edwardthomson.com/blog/github_actions_17_dependent_jobs.html)
  - [Article: GitHub Actions: Cache Everything](https://www.jonathan-wilkinson.com/github-actions-cache-everything)

- [x] Require mandatory passing check

  - [Doc: required status check](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/troubleshooting-required-status-checks)
  - [Doc: `on` syntax](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#on)

- [x] Add Storybook + Chromatic checks: https://github.com/Al-un/ci-github-actions/pull/4
  - [Doc: Setup GitHub action for Chromatic](https://www.chromatic.com/docs/github-actions)
  - [Doc: Caveat with `actions/checkout@v2`](https://www.chromatic.com/docs/github-actions#support-for-codeactionscheckoutv2code)
