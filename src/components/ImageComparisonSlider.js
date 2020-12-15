import React, { useState } from 'react';

export const ImageComparisonSlider = ({
    width = 600,
    height = 400,
    direction = 'horizontal',
    beforeImage,
    afterImage
}) => {
    const [pressed, setPressed] = useState(false);
    const [mouseX, setMouseX] = useState(width * 0.5);
    const [mouseY, setMouseY] = useState(height * 0.5);

    const isVertical = direction !== 'horizontal';

    const handleMouseDown = () => {
        setPressed(true);
    };

    const handleMouseUpAndLeave = () => {
        setPressed(false);
    };

    const handleMouseMove = event => {
        if (pressed) {
            setMouseValues(event);
        }
    };

    const handleMouseClick = event => {
        setMouseValues(event);
    };

    const setMouseValues = event => {
        const mouseX = event.clientX - event.target.getClientRects()[0].left;
        const mouseY = event.clientY - event.target.getClientRects()[0].top;

        if (isVertical) {
            setMouseY(mouseY);
        } else {
            setMouseX(mouseX);
        }
    };

    return (
        <div
            style={{ ...styles.container(width, height, isVertical) }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUpAndLeave}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUpAndLeave}
            onClick={handleMouseClick}
        >
            <div style={{ ...styles.before(beforeImage, height) }}></div>
            <div
                style={{
                    ...styles.after(
                        afterImage,
                        height,
                        isVertical,
                        mouseX,
                        mouseY
                    )
                }}
            ></div>
            <div
                style={{
                    ...styles.resizeIcon(isVertical, mouseX, mouseY)
                }}
            >
                &#8645;
            </div>
        </div>
    );
};

const styles = {
    container: (width, height, isVertical) => ({
        width,
        height,
        background: '#ccc',
        position: 'relative',
        cursor: !isVertical ? 'col-resize' : 'row-resize'
    }),
    before: (img, height) => ({
        background: `url(${img}) no-repeat center`,
        height,
        ...styles.imageItem
    }),
    after: (img, height, isVertical, mouseX, mouseY) => {
        const clipInset = !isVertical
            ? `inset(0 0 0 ${mouseX}px)`
            : `inset(${mouseY}px 0 0 0)`;

        return {
            background: `url(${img}) no-repeat center`,
            height,
            clipPath: clipInset,
            ...styles.imageItem
        };
    },
    resizeIcon: (isVertical, mouseX, mouseY) => {
        const rotate = !isVertical ? 'rotate(90deg)' : null;
        return {
            pointerEvents: 'none',
            background: `#2f9881`,
            borderRadius: '50%',
            transform: rotate,
            left: `${mouseX - 25}px`,
            top: `${mouseY - 25}px`,
            position: 'absolute',
            color: 'white',
            textAlign: 'center',
            padding: '15px 18px'
        };
    },
    imageItem: {
        position: 'absolute',
        backgroundSize: 'cover',
        width: '100%'
    }
};
