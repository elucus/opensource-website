import React from 'react';
import TestRenderer from 'react-test-renderer'; // https://reactjs.org/docs/test-renderer.html
// import { render } from '@testing-library/react'; // https://testing-library.com/docs/react-testing-library/intro
// import { useStaticQuery } from 'gatsby';

import { get } from 'lodash';

import ProjectSearchInput from '../ProjectSearchInput';
import data from './fixtures/ProjectSearchInput';

const allLanguages = get(data, 'allLanguages.group', []);
const allCategories = get(data, 'allCategories.group', []);
const allProjectTags = get(data, 'allProjectTags.group', []);

const filterOptions = {
  allCategories: { title: 'Categories', options: allCategories },
  allLanguages: { title: 'Language', options: allLanguages },
  allProjectTags: { title: 'Type', options: allProjectTags }
};

describe('ProjectSearchInput', () => {
  it('Renders correctly', () => {
    const props = {
      filterOptions,
      filterValues: {
        ossCategory: '',
        projectTag: '',
        languageType: ''
      },
      searchQueryValue: '',
      onSearchQueryChange: () => {},
      onFilterChange: () => {}
    };
    const tree = TestRenderer.create(
      <ProjectSearchInput {...props} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
