import React from 'react';
import Categories from './collections/categories';
import Session from './models/session';

export default {
  categories: new Categories(),
  session: new Session()
};
