If this is your first time, below are some more detailed steps for getting your branch set up and submitting a PR. You can either do this with the command prompt or with a combination of the command prompt and VS Code.

## Setting up your branch for changes
For each bug or task you complete, it is recommended that you start with a fresh branch. If you have any lingering changes in your current branch that you want to save, go ahead and commit them. If you are just beginning, then you are good to go. On github, navigate to your repository which should be **forked** from Microsoft/react-native-windows. If you haven't already created a fork, follow the steps in [Github branch Setup](https://github.com/Microsoft/react-native-windows/wiki/Setup). Above the list of files is a dropdown that should say master. Use the dropdown to create a new branch and name is according to what you will be working on. (I.e. DropdownHighlight, CleanUpExamples, etc). Now you have created a new branch.

**VS Code**: If you are using VS Code your current branch shows in the bottom left corner. You can click that and then select from the list to check out either a local or remote branch.

**Git Command Line**: If you are using the command line, you will want to make sure you have your branch locally. It takes time for it to show up automatically, so you can make it show by running git remote update origin –prune in your command prompt from the root. Run git branch -a to see if your new branch shows up. Now you will want to check out your branch locally. You can do this with git checkout -b branch-name. Confirm you are now working out of the branch with git branch.

## Make the fix
Now that your branch is set up and ready for commits, go ahead and fix the bug you are working on or make some small change that you want to check in.

## Verify your changes
Manually test your fix, and ensure that all tests are in a good state.

Note: If you update snapshots in a branch on the Gallery repo, it will update the timeZoneOffsetInSeconds property in the snapshots to -28800. Currently, this will fail in CI as the timezone when running the snapshot test in CI is different. You will need to manually set the timeZoneOffsetInSeconds value in your snapshots to '-0' after running the `updateSnapshots` command.

## Commit your changes
**VS Code**: In VS Code, click on Source Control from the left bar. In the list shown stage all of the files you want to submit by selecting them and clicking "+" ("Stage changes"). Add a short message in the textbox at the bottom on what is included in your change. The press "Commit".

**Git Command Line**: To stage files using the command line, you need to run git add MyFileOne.tsx for each file. You can also look up how to add all files with changes under a directory. Next you will want to commit changes with git commit –m "This change updates the padding in the dropdown"

You can commit multiple times until you are ready to make a pull request. You should keep the message short since it will not be used in the bug notes and is just for keeping track of the multiple commits in one pull request.

## Creating a Pull Request
**VS Code**: In VS Code click Push.

**Git Command Line**: Run git push origin <branch_name>.

This will push any staged files you have in your branch.

Now go back to your fork on github. You should see a yellow bar at the top with your change and a button that says "Compare & Pull Request". Click that button.

Click "Create Pull Request".

Fill the description of your PR with an explanation of why you made this change, what the change is, and how you changed the repo. Then, if applicable include screenshots of errors/warnings you resolved, or changes to the UI you made. 

A bunch of tests will automatically kick off to verify your PR. The tests marked as required must pass before a PR can be merged.

Someone will also have to review your change before the change is allowed to be merged in. They may ask questions for more information or ask you to change things. Be sure to respond to their comments and push additional changes to the branch if they ask you to modify things before they sign off. Leave PRs open for at least 24 hours even if you have already received approval before the 24 hour mark; this ensure that all possible reviewers have had the opportunity to make comments.

Now you are done! Celebrate! Thank you for your contribution!

# Adding Sample Pages

![gallery_datepicker](https://user-images.githubusercontent.com/34109996/108123330-86734180-705a-11eb-8bea-409f017ab781.PNG)

To add a sample page you'll need to:

1. Author your page as a standard RN component that uses 'Page' and 'Example' components for structure. See [./src/examples/](https://github.com/microsoft/RNGallery/tree/main/src/examples) for existing sample pages
2. Add an entry to the array in [RNGalleryList](https://github.com/microsoft/RNGallery/blob/f592dac5969f054dad4837929d214c2fd63495a5/src/RNGalleryList.ts#L1)

For more detailed instructions on how to add a page visit [here](https://github.com/microsoft/react-native-gallery/wiki/Add-a-Component-Page).
