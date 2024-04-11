export const formatDate = (date) => {
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  return new Date(date).toLocaleDateString('fr-FR', options);
}