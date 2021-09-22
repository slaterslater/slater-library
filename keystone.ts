// keystone.ts

import { config, list } from '@keystone-next/keystone';
import { text } from '@keystone-next/keystone/fields';
import { lists } from './schema';

// const Ebook = list({
//   fields: {
//     title: text({ isRequired: true }),
//     slug: text({ isIndexed: 'unique', isFilterable: true }),
//     content: text(),
//   },
// });


export default config({
  db: { provider: 'sqlite', url: 'file:./app.db' },
  experimental: {
    generateNextGraphqlAPI: true,
    generateNodeAPI: true,
  },
  // lists: { Ebook },
  lists
});
