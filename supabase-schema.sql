-- GameFit cloud profile and favorites. Run in Supabase SQL Editor.
create table if not exists public.gamefit_user_data (
  user_id uuid primary key references auth.users(id) on delete cascade,
  pc jsonb not null default '{}'::jsonb,
  favorites jsonb not null default '[]'::jsonb,
  theme text not null default 'dark' check (theme in ('dark','light')),
  updated_at timestamptz not null default now()
);
alter table public.gamefit_user_data enable row level security;
drop policy if exists "Users can read own GameFit data" on public.gamefit_user_data;
create policy "Users can read own GameFit data" on public.gamefit_user_data for select to authenticated using (auth.uid()=user_id);
drop policy if exists "Users can insert own GameFit data" on public.gamefit_user_data;
create policy "Users can insert own GameFit data" on public.gamefit_user_data for insert to authenticated with check (auth.uid()=user_id);
drop policy if exists "Users can update own GameFit data" on public.gamefit_user_data;
create policy "Users can update own GameFit data" on public.gamefit_user_data for update to authenticated using (auth.uid()=user_id) with check (auth.uid()=user_id);
