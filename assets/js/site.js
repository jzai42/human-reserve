(() => {
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.menu-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', () => {
      const visible = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(visible));
      toggle.textContent = visible ? 'CLOSE' : 'MENU';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='MENU';
    }));
  }
  const reader = document.querySelector('[data-reader]');
  if (!reader) return;
  const modes = reader.querySelectorAll('[data-mode]');
  const modeKey = 'human-reserve-reader-mode';
  let choice = 'panels';
  try { const s = sessionStorage.getItem(modeKey); if (['panels','stacked','full'].includes(s)) choice=s; } catch(_){ }
  const setMode = mode => {
    reader.classList.remove('panels','stacked','full');
    reader.classList.add(mode);choice=mode;
    modes.forEach(b => b.setAttribute('aria-pressed',String(b.dataset.mode===mode)));
    try { sessionStorage.setItem(modeKey,mode); } catch(_){ }
  };
  modes.forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));
  setMode(choice);
  const dialog = document.querySelector('#panel-lightbox');
  const panelButtons = [...reader.querySelectorAll('[data-panel-index]')];
  const image = dialog?.querySelector('[data-lb-image]');
  const label = dialog?.querySelector('[data-lb-label]');
  let current = 0;
  function renderPanel(index){
    current=(index+panelButtons.length)%panelButtons.length;
    const source=panelButtons[current].querySelector('img');
    if (!source || !image) return;
    image.src=source.src;image.alt=source.alt;
    if(label)label.textContent=`CASE 001 / PANEL ${current+1} OF ${panelButtons.length}`;
  }
  panelButtons.forEach((b,i)=>b.addEventListener('click',()=>{renderPanel(i);dialog?.showModal();}));
  dialog?.querySelector('[data-lb-close]')?.addEventListener('click',()=>dialog.close());
  dialog?.querySelector('[data-lb-prev]')?.addEventListener('click',()=>renderPanel(current-1));
  dialog?.querySelector('[data-lb-next]')?.addEventListener('click',()=>renderPanel(current+1));
  dialog?.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  document.addEventListener('keydown',e=>{
    if(!dialog?.open)return;
    if(e.key==='ArrowRight')renderPanel(current+1);
    if(e.key==='ArrowLeft')renderPanel(current-1);
  });
  const copy=document.querySelector('[data-copy-link]');
  copy?.addEventListener('click', async()=>{
    try {await navigator.clipboard.writeText(window.location.href);copy.textContent='LINK COPIED ✓';setTimeout(()=>copy.textContent='COPY LINK',2200);}catch(_){ copy.textContent='COPY URL FROM ADDRESS BAR'; }
  });
})();
