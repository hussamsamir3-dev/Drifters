-- Run this once in Supabase → SQL Editor. It is only needed for the lap leaderboard.
-- Online rooms (build 105: up to eight drivers, AI fill, quick match) use Realtime only and need no tables or policies:
--   'tafheet:<CODE>'  one channel per room: presence (each driver's name, car, ready state; the host's room settings) and broadcast
--                     (race messages: compact car states, the host's AI cars and official order);
--   'tafheet:lobby'   the quick-match directory: hosts with free seats answer a broadcast 'ask' with their room code.
-- Nothing below changed for build 105, so a project set up for an older build keeps working as it is.
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
