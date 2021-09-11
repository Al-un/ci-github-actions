![Master main flow](https://github.com/Al-un/ci-github-actions/actions/workflows/main.yml/badge.svg)

# ci-github-actions

Testing Github Actions on a Vue 3 project:

- Setup basic actions

  - [x] Github action 101: https://github.com/Al-un/ci-github-actions/pull/1

    - [Doc: Quickstart](https://docs.github.com/en/actions/quickstart)
    - [Doc: Overview](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)
    - [Doc: Node.js build and test](https://docs.github.com/en/actions/guides/building-and-testing-nodejs?learn=continuous_integration)
    - [Doc: Workflow badge](https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/adding-a-workflow-status-badge)

  - [ ] Parallel jobs (Like CircleCI fanning out)
    - [Doc: Creating a composite action](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action?learn=create_actions)
    - [Doc: `runs` for composite actions](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-composite-actions)
    - [GitHub Blog: Reduce duplication with action composition](https://github.blog/changelog/2021-08-25-github-actions-reduce-duplication-with-action-composition/)
    - [Article: Stop wasting your time and create reusable actions](https://dev.to/n3wt0n/github-composite-actions-nest-actions-within-actions-3e5l)
    - Composite actions file must be named `action.y(a)ml`
  - [ ] Mandatory passing check

- Add Storybook + Chromatic checks
  - [ ] Adding secret to repo (Chromatic key)
