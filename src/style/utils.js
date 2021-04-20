import { generateMedia } from 'styled-media-query';

export const customSizes = {
    xs: '480px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1600px',
};

export const customQueries = {
    xs: `(max-width: ${customSizes.xs})`,
    sm: `(max-width: ${customSizes.sm})`,
    md: `(max-width: ${customSizes.md})`,
    lg: `(max-width: ${customSizes.lg})`,
    xl: `(max-width: ${customSizes.xl})`,
    xxl: `(max-width: ${customSizes.xxl})`,
};

export const mediaSizes = generateMedia(customSizes);
