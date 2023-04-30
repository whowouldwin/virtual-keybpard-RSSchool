const state = {
  lang: localStorage.getItem('lang') || 'eng',
  shift: 'disabled',
  activeShift: false,
  activeCaps: false,
};
export default state;
