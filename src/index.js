import React from 'react';
import ReactDOM from 'react-dom';
import luanRbg from './assets/luan_brazil_rgb.jpg';
import luanBw from './assets/luan_brazil_bw.jpg';
import errors_prev from './assets/7errors_prev.jpg';
import errors_next from './assets/7errors_next.jpg';

import { ImageComparisonSlider } from './components/ImageComparisonSlider';

ReactDOM.render(
    <>
        <ImageComparisonSlider
            beforeImage={luanBw}
            afterImage={luanRbg}
            direction="horizontal"
        />
        <br />
        <ImageComparisonSlider
            beforeImage={errors_prev}
            afterImage={errors_next}
            width={400}
            height={536}
            direction="vertical"
        />
    </>,
    document.getElementById('root')
);
