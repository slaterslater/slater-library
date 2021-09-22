import { list } from '@keystone-next/keystone';
import { checkbox, text, timestamp } from '@keystone-next/keystone/fields';
import { select } from '@keystone-next/keystone/fields';

export const lists = {
  Ebook: list({
    fields: {
      title: text({ isRequired: true }),
      slug: text({ isIndexed: 'unique', isFilterable: true }),
      content: text(),
    },
    // fields: {
    //   label: text({ isRequired: true }),
    //   priority: select({
    //     dataType: 'enum',
    //     options: [
    //       { label: 'Low', value: 'low' },
    //       { label: 'Medium', value: 'medium' },
    //       { label: 'High', value: 'high' },
    //     ],
    //   }),
    //   isComplete: checkbox(),
    //   finishBy: timestamp(),
    // },
    // defaultIsFilterable: true,
    // defaultIsOrderable: true,
  }),
};