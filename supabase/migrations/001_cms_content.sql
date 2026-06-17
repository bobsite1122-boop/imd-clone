-- CMS content storage for imd-clone
-- Run this in Supabase SQL Editor or via migration

create table if not exists public.cms_content (
  id text primary key check (id in ('pricing', 'faq', 'resources')),
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.cms_content enable row level security;

-- No public policies: all access via service role on server only

create or replace function public.cms_content_set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists cms_content_updated_at on public.cms_content;
create trigger cms_content_updated_at
  before update on public.cms_content
  for each row execute function public.cms_content_set_updated_at();
