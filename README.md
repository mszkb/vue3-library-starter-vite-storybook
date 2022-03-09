# Vue3 Component Library Starter using Typescript + Vite + Storybook

This template should help get you started developing a Vue 3 component library.
It includes Typescript support, Storybook integration, Jest & Cypress preconfigured and Vite as the build tool.

## Developing along with other projects

Prerequisites: Yarn 1.22.17

This repo is meant as a submodule for your other projects. As you work on your project you will also make many changes
in the standard components. So the submodule strategy is ideal.

1) Put your frontend code of your project in a separate folder
2) Initialize git submodules ```git submodule init```
3) Add this project as a submodule ```git submodule add https://github.com/myname/myrepo```
4) Setup yarn workspaces with two packages: your app and the submodule
5) Do ```yarn install```

Read more about this approach here: https://blog.nrwl.io/dev-workflow-using-git-submodules-and-yarn-workspaces-14fd06c07964

## E2E / Acceptance testing

For Acceptance and E2E testing we use cypress + cucumber. As cypress is a big package we excluded it from the main
package.json. To install cypress got to ```./tests/e2e``` and do ```yarn install```
