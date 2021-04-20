# React Native Gallery

Welcome to React Native Gallery. A React Native Windows application which displays the range of React Native components with Windows support. React Native Gallery is currently live in the Microsoft Store! Follow the link to [download](https://www.microsoft.com/en-us/p/react-native-gallery/9npg0b292h4r).

![gallery_welcome](https://user-images.githubusercontent.com/34109996/115446025-777c4d00-a1cb-11eb-8a8f-c1758613c09f.png)

# Building React Native Gallery

If you wish to build React Native Gallery on your computer locally, follow the following steps:

1. Clone the repository.
2. In the root directory of the repository on your device, run `yarn`.
3. In the same directory run `npx react-native run-windows`.

# Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

For addtional information about contributing to React Native Gallery visit [here](https://github.com/microsoft/react-native-gallery/wiki/Contributing-to-React-Native-Gallery).

# Adding Sample Pages

![gallery_datepicker](https://user-images.githubusercontent.com/34109996/108123330-86734180-705a-11eb-8bea-409f017ab781.PNG)

To add a sample page:

1. Author your page as a standard RN component and export the component. See https://github.com/microsoft/RNGallery/tree/main/src/examples for existing sample pages
2. Add an entry to the array in the [RNGalleryList](https://github.com/microsoft/RNGallery/blob/f592dac5969f054dad4837929d214c2fd63495a5/src/RNGalleryList.ts#L1)

```
import {FooExamplePage} from './examples/FooExamplePage';

export const RNGalleryList: Array<IRNGalleryExample> = [
  ...
  {
    key: 'FooExamplePage',
    component: FooExamplePage,
  },
];
```

It's that simple! The app will pick up your new sample page, add an item in the navigation draw for it, and navigate to your page when the user clicks on it. If you want a more detailed set of instructions on how to add a page visit [here](https://github.com/microsoft/react-native-gallery/wiki/Add-a-Component-Page).
