export const $$ = {
  onReady(fn){ if (document.readyState !== 'loading') fn(); else addEventListener('DOMContentLoaded', fn); },
  qs(sel, el=document){ return el.querySelector(sel); },
  qsa(sel, el=document){ return [...el.querySelectorAll(sel)]; }
};
