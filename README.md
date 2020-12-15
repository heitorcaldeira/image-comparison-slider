# Image Comparison Slider

![](demo.gif)

Compare two images using a horizontal or vertical slider.

How to use?


```JSX
import { ImageComparisonSlider } from './ImageComparisonSlider';
import imageBefore from './assets/imageBefore.jpg';
import imageAfter from './assets/imageAfter.jpg';

<ImageComparisonSlider
    beforeImage={imageBefore}
    afterImage={imageAfter}
    width={400} // default=600
    height={536} // default=400
    direction="vertical" // default="horizontal"
/>
```

## Available Scripts

To see the demo, in the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Runs the build for production