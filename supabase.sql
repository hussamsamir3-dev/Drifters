-- Run this once in Supabase → SQL Editor. It is only needed for the lap leaderboard.
-- Online duels use Realtime broadcast channels and need no tables at all.
create table if not exists public.lap_times (
  id         bigint generated always as identity primary key,
  track      text not null,
  name       text not null check (char_length(name) between 1 and 16),
  car        text not null,
  ms         integer not null check (ms between 5000 and 900000),
  created_at timestamptz not null default now()
);
create index if not exists lap_times_track_ms on public.lap_times (track, ms);

alter table public.lap_times enable row level security;
create policy "anyone can read lap times"  on public.lap_times for select using (true);
create policy "anyone can post a lap time" on public.lap_times for insert with check (true);
