# LinguaRoom

Платформа для репетиторов иностранных языков. ТЗ — в [`SPEC.md`](SPEC.md), правила работы — в [`CLAUDE.md`](CLAUDE.md).

**Готово (Этап 0):** регистрация и вход (почта + пароль, Google), роли учитель / ученик, профиль, интерфейс на русском, английском и казахском, боковое меню.

## Команды

| Команда | Что делает |
|---|---|
| `npm install` | установить зависимости (один раз) |
| `npm run dev` | запустить локально на http://localhost:3000 |
| `npm run build` | собрать проект (так же делает Vercel) |
| `npm run lint` | проверить код |
| `npm test` | быстрые тесты логики (Vitest) |
| `npm run test:e2e` | проверки в браузере (Playwright, сначала `npm run build`) |
| `node scripts/db.mjs status` | какие миграции базы применены |
| `node scripts/db.mjs migrate` | применить новые миграции к Supabase |
| `node scripts/db.mjs types` | обновить типы базы для TypeScript |

`scripts/db.mjs` работает через Supabase Management API и нужен ключ доступа
(`SUPABASE_ACCESS_TOKEN`, Account → Access Tokens). Применённые миграции записываются
в `supabase_migrations.schema_migrations` — ту же таблицу, что использует Supabase CLI.

Для локального запуска скопируйте `.env.example` в `.env.local` и вставьте два значения из Supabase.

Сценарии учителя в `npm run test:e2e` работают с тестовым аккаунтом: добавьте в `.env.local`
`E2E_TEACHER_EMAIL` и `E2E_TEACHER_PASSWORD` (подтверждённый аккаунт с ролью «учитель»).
Без них эти сценарии пропускаются.

## Настройка сервисов (один раз)

### Supabase
1. **База данных.** Откройте **SQL Editor → New query**, вставьте весь файл
   [`supabase/migrations/20261110120000_profiles.sql`](supabase/migrations/20261110120000_profiles.sql) и нажмите **Run**.
   Каждый следующий файл из `supabase/migrations/` запускается так же, по порядку и один раз.
2. **Authentication → URL Configuration**
   - Site URL — адрес сайта на Vercel;
   - Redirect URLs — `https://<адрес>.vercel.app/**` и `http://localhost:3000/**`.
     Для предпросмотров веток Vercel добавьте также `https://*-<ваш-аккаунт>.vercel.app/**`.
3. **Authentication → Emails** (рекомендуется, чтобы ссылки из писем работали на любом устройстве):
   - шаблон **Confirm signup**: замените ссылку `{{ .ConfirmationURL }}` на
     `{{ .RedirectTo }}&token_hash={{ .TokenHash }}&type=email`
   - шаблон **Reset Password**: замените `{{ .ConfirmationURL }}` на
     `{{ .RedirectTo }}&token_hash={{ .TokenHash }}&type=recovery`

### Vercel
Переменные окружения (Settings → Environment Variables):

| Имя | Значение |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Project URL, напр. `https://abcd.supabase.co` (без `/rest/v1`) |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Publishable key (`sb_publishable_…`) |

Секретный ключ (`service_role` / secret) в проект **не добавляется**.

## Как устроен код

```
src/app/[locale]/            страницы (ru / en / kk в адресе)
  (auth)/                    вход, регистрация, восстановление пароля
  (app)/                     кабинет с боковым меню (нужен вход)
  onboarding/                выбор роли после первого входа через Google
src/app/auth/callback/       возврат после Google и ссылок из писем
src/proxy.ts                 язык в адресе + обновление сессии Supabase
src/features/auth/           действия входа/регистрации на сервере
src/features/profile/        сохранение профиля
src/components/ui/           компоненты shadcn/ui
src/components/app-shell/    боковое меню, меню пользователя
src/lib/supabase/            клиенты Supabase и типы базы
messages/{ru,en,kk}.json     все тексты интерфейса
supabase/migrations/         изменения базы данных
tests/, e2e/                 тесты Vitest и Playwright
```

**Безопасность профилей** (в миграции): каждый видит и меняет только свой профиль; роль выбирается один раз и больше не меняется; `is_admin` нельзя поменять из приложения — только в Supabase (Table Editor).

### Типы базы данных
`src/lib/supabase/database.types.ts` генерируется из настоящей базы: `node scripts/db.mjs types`.
