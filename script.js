// ---- mobile nav toggle ----
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('is-open');
      nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('is-open');
        nav.classList.remove('is-open');
      });
    });
  }

  // ---- works: click thumbnail to load embed (YouTube or Vimeo) ----
  document.querySelectorAll('.work-media').forEach(media => {
    media.addEventListener('click', () => {
      const ytId = media.getAttribute('data-yt');
      const vimeoId = media.getAttribute('data-vimeo');
      const vimeoHash = media.getAttribute('data-vimeo-hash');
      if (!ytId && !vimeoId) return; // 動画IDが未設定の場合は何もしない
      const iframe = document.createElement('iframe');
      if (ytId) {
        iframe.src = `https://www.youtube.com/embed/${ytId}?autoplay=1&rel=0`;
      } else {
        const hashParam = vimeoHash ? `&h=${vimeoHash}` : '';
        iframe.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479${hashParam}`;
        iframe.allow = 'autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      }
      iframe.allow = iframe.allow || 'autoplay; encrypted-media; picture-in-picture';
      iframe.allowFullscreen = true;
      media.innerHTML = '';
      media.appendChild(iframe);
    });
  });

  // ---- contact form (Formspree AJAX submit) ----
  const form = document.getElementById('contact-form');
  if (form) {
    const status = document.getElementById('form-status');
    const submitBtn = form.querySelector('.submit-btn');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      status.textContent = '';
      status.className = 'form-status';
      submitBtn.disabled = true;
      submitBtn.textContent = '送信中…';
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          status.textContent = 'お問い合わせありがとうございます。内容を送信しました。';
          status.classList.add('ok');
          form.reset();
        } else {
          status.textContent = '送信に失敗しました。時間をおいて再度お試しください。';
          status.classList.add('err');
        }
      } catch (err) {
        status.textContent = '送信に失敗しました。通信環境をご確認ください。';
        status.classList.add('err');
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = '送信する';
      }
    });
  }
});
