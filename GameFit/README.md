# GameFit 0.3 — каталог игр с обложками и системными требованиями

GameFit — русскоязычный прототип для предварительного сравнения характеристик компьютера с опубликованными требованиями игр.

## Каталог

Сейчас в стартовой базе **16 игр**: PEAK, Minecraft: Java Edition, Roblox, Rocket League, Euro Truck Simulator 2, Stardew Valley, Content Warning, Human: Fall Flat, Overcooked! 2, Among Us, Portal 2, Don't Starve Together, Slime Rancher, PowerWash Simulator, The Sims 4 и Trackmania. Это не все существующие игры — каталог можно дополнять.

Карточки используют обложки с официальных страниц Steam или других игровых/издательских страниц. Изображения загружаются из интернета; при отсутствии подключения показывается emoji-запасной вариант.

## Возможности

- Каталог из 16 игр с обложками, поиском и фильтрами.
- Просмотр минимальных и рекомендованных требований с источниками.
- Профиль ПК: CPU, GPU, RAM, свободное место, ОС и тип графики.
- Локальное сохранение профиля, избранного и темы оформления.
- Быстрое получение некоторых данных, которые браузер разрешает прочитать.
- Предварительная проверка RAM, диска, ОС; CPU/GPU помечаются для ручного сравнения.
- Скачивание текстового отчёта.
- Адаптация для телефона, PWA-заготовка и страницы о проекте/конфиденциальности.

## Ограничения точности

Это не бенчмарк: GameFit не измеряет FPS и не гарантирует запуск. Обычная веб-страница не может надёжно получить точную модель CPU и GPU и полную конфигурацию ПК. Для этого в будущем понадобится отдельная доверенная программа или добровольные пользовательские тесты.

У разных игр отличаются версии, операционные системы и обновления. Особенно старые страницы системных требований могут не отражать текущее состояние клиента Steam или самой игры. Перед покупкой проверяй первоисточник.

## Запуск

Открой `index.html` в современном браузере. Для PWA и service worker нужен HTTPS-хостинг или localhost.

Локальный сервер (при установленном Python):

```bash
python -m http.server 8000
```

Затем открой `http://localhost:8000`.

## Публикация на GitHub Pages

1. Создай репозиторий `gamefit` (с учётом возрастных правил GitHub; при необходимости попроси родителя помочь).
2. Загрузи содержимое этой папки в корень репозитория.
3. В Settings → Pages включи Deploy from a branch, `main`, `/ (root)`.
4. После публикации проверь мобильную версию, ссылки, изображения и сохранение профиля.

## Источники требований

- PEAK — https://store.steampowered.com/app/3527290/PEAK/
- Minecraft Java — https://www.minecraft.net/en-us/store/minecraft-java-bedrock-edition-pc
- Roblox — https://en.help.roblox.com/hc/en-us/articles/203312800-Computer-Hardware-Operating-System-Requirements
- Rocket League — https://www.epicgames.com/help/en-US/c-37599050/c-Trending_0/a10011593
- Euro Truck Simulator 2 — https://store.steampowered.com/app/227300/Euro_Truck_Simulator_2/
- Stardew Valley — https://store.steampowered.com/app/413150/Stardew_Valley/
- Content Warning — https://store.steampowered.com/app/2881650/Content_Warning/
- Human: Fall Flat — https://store.steampowered.com/app/477160/Human_Fall_Flat/
- Overcooked! 2 — https://store.steampowered.com/app/728880/Overcooked_2/
- Among Us — https://store.steampowered.com/app/945360/Among_Us/
- Portal 2 — https://store.steampowered.com/app/620/Portal_2/
- Don't Starve Together — https://store.steampowered.com/app/322330/Dont_Starve_Together/
- Slime Rancher — https://store.steampowered.com/app/433340/Slime_Rancher/
- PowerWash Simulator — https://store.steampowered.com/app/1290000/PowerWash_Simulator/
- The Sims 4 — https://store.steampowered.com/app/1222670/The_Sims_4/
- Trackmania — https://www.ubisoft.com/en-gb/help/trackmania/gameplay/article/system-requirements-for-trackmania/000081203

**Памятка:** перепроверяй требования перед покупкой. Источники и сведения о совместимости могут меняться после обновлений.
