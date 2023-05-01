const state = {
  lang: localStorage.getItem('lang') || 'eng',
  shift: 'base',
  activeShift: false,
  activeCaps: false,
};
export default state;
