
# Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

# Adding Sample Pages

To add a sample page:  

1) Author your page as a standard RN component and export the component.  See https://github.com/microsoft/RNGallery/tree/main/src/examples for existing sample pages
2) Add an entry to the array in the [RNGalleryList](https://github.com/microsoft/RNGallery/blob/f592dac5969f054dad4837929d214c2fd63495a5/src/RNGalleryList.ts#L1)  

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

It's that simple!  The app will pick up your new sample page, add an item in the navigation draw for it, and navigate to your page when the user clicks on it.

