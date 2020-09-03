'use strict';
import React from 'react';

interface IRNGalleryExample {
    key: string;
    module: IRNGalleryModule;
  }
  
  interface IRNGalleryModule {
    title: string;
    description: string;
    external: boolean;
    examples: [IRNGalleryrModuleExample];
  }
  
  interface IRNGalleryrModuleExample {
    title: string;
    description: string;
    render(): React.Component;
  }
  
  const RNGalleryExamples: Array<IRNGalleryExample> = [
    {
      key: 'CheckboxExample',
      module: require('./examples/CheckboxExample'),
    },
  ];