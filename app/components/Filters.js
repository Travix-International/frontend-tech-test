/**
 * Created by NarsFam on 08.07.2017.
 */
import React from 'react';
import FiltersContainer from '../containers/FiltersContainer';
import visibilities from '../consts/visibilityTypes';

const Filters = () => (
    <p>
        <span className="text-info"><b>Filter:</b></span>
        {' '}
        <FiltersContainer filter={visibilities.ALL}>
            All
        </FiltersContainer>
        {', '}
        <FiltersContainer filter={visibilities.LEFT}>
            Left
        </FiltersContainer>
        {', '}
        <FiltersContainer filter={visibilities.DONE}>
            Done
        </FiltersContainer>
    </p>
);

export default Filters;