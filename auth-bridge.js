(() => {
  const start = () => {
    const button = document.getElementById('googleSignInBtn');
    const status = document.getElementById('authStatus');
    if (!button || button.dataset.googleBridgeReady === '1') return;
    button.dataset.googleBridgeReady = '1';

    const show = message => {
      if (status) status.textContent = message;
    };

    button.addEventListener('click', async event => {
      event.preventDefault();
      event.stopImmediatePropagation();
      button.disabled = true;
      show('Проверяем подключение Google…');

      try {
        const config = window.GAMEFIT_SUPABASE_CONFIG;
        if (!window.supabase) throw new Error('Библиотека Supabase не загрузилась. Проверь интернет или блокировщик.');
        if (!config || !config.url || !config.anonKey) throw new Error('Не найдены публичные настройки Supabase.');
        const client = window.supabase.createClient(config.url, config.anonKey);
        show('Подключение готово. Открываем страницу Google…');
        const { error } = await client.auth.signInWithOAuth({
          provider: 'google',
          options: { redirectTo: window.location.origin + window.location.pathname }
        });
        if (error) throw error;
        show('Запрос отправлен. Если страница не открылась, проверь разрешённые Redirect URLs в Supabase.');
      } catch (error) {
        const detail = error && error.message ? error.message : String(error);
        show('Ошибка Google-входа: ' + detail);
        button.disabled = false;
      }
    }, true);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    start();
  }
})();