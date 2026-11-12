module.exports = {
  format_date: (date) =>
    new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),

  initial: (name) => (name ? String(name).charAt(0).toUpperCase() : '?'),

  pluralize: (count, word) => (count === 1 ? word : `${word}s`),
};
