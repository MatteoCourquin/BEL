export const formatSlug = (slug) => {
  return slug
    .toLowerCase()
    .replace(/ /g, '')
    .replace(/[^\w-]+/g, '');
};
