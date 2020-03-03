# Contributing to Custom-Material-UI 🔗

Thanks for visiting this page. It's really great. 🥳

## Your first Pull Request 💡

Have any idea how to improve repo or find a bug? 

Firstly, please check comment thread in case somebody is already discuss it and working on the same issue. 
If nobody is working on it at the moment, please leave a comment stating that you have started to work on it so other people don’t accidentally duplicate your effort.

## Sending a Pull Request 📤

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote:
```sh
git clone git@github.com:<yourname>/custom-material-ui.git
cd custom-material-ui
git remote add upstream git@github.com:AlexanderVishnevsky/custom-material-ui.git
```

3. Synchronize your local `master` branch with the upstream one:

```sh
git checkout master
git pull upstream master
```

4. Install the dependencies:

```sh
npm install
```

5. Create a new topic branch:

```sh
git checkout -b my-topic-branch
```

6. Make changes, commit and push to your fork:

```sh
git push -u
```
7. Please don't forget to use Prettier and Eslint if possible to avoid different code style
8. Go to [the repository](https://github.com/AlexanderVishnevsky/custom-material-ui) and make a Pull Request.