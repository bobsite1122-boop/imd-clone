-- Add install CMS content type

alter table public.cms_content drop constraint if exists cms_content_id_check;

alter table public.cms_content
  add constraint cms_content_id_check
  check (id in ('pricing', 'faq', 'resources', 'install'));

insert into public.cms_content (id, data)
values ('install', '{"downloadApkUrl": "https://sg.imedicaldoctor.net/imd195.apk"}'::jsonb)
on conflict (id) do nothing;
