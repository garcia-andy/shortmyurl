import { defineTable, defineDb, column } from 'astro:db';

export const Users = defineTable({
  columns: {
    id: column.number({primaryKey: true }),
    name: column.text({ optional: false }),
    account: column.text({ optional: false }),
    info: column.json(),
  },
});

export const PermanentsLinks = defineTable({
  columns: {
    id: column.number({primaryKey: true }),
    originalUrl: column.text({ optional: false }),
    hash: column.text({ optional: false }),
    time: column.number({ optional: false }),
    userID: column.number({ references: () => Users.columns.id }),
  },
});

export const Links = defineTable({
  columns: {
    id: column.number({primaryKey: true }),
    originalUrl: column.text({ optional: false }),
    hash: column.text({ optional: false }),
    time: column.number({ optional: false }),
    isTemporal: column.boolean({ optional: true, default: true }),
  },
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    Users,
    Links,
  }
});
