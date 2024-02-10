import React from 'react';
import { useSmoothNavber } from '../../../Context/NavberProvider';
import FeatureIntro from './FeatureIntro';
import FeatureTable from './FeatureTable';

const FeatureComparison = () => {
    const { Features } = useSmoothNavber()
    return (
        <div className='max-w-6xl mx-auto' id='Features' ref={Features}>
            <FeatureIntro />
            <FeatureTable />
        </div>
    );
};

export default FeatureComparison;