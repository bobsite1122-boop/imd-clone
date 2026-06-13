import { config, fields, collection, singleton } from '@keystatic/core'

const githubStorageConfigured = Boolean(
  process.env.KEYSTATIC_GITHUB_CLIENT_ID &&
    process.env.KEYSTATIC_GITHUB_CLIENT_SECRET &&
    process.env.KEYSTATIC_SECRET,
)

export default config({
  storage: githubStorageConfigured
    ? {
        kind: 'github',
        repo: 'mehmoodzafarfreelancing-ai/imd-clone',
      }
    : { kind: 'local' },
  ui: {
    brand: { name: 'iMD App Admin' },
  },
  singletons: {
    siteSettings: singleton({
      label: 'Site Settings',
      path: 'content/site-settings',
      schema: {
        siteName: fields.text({
          label: 'Site Name',
          defaultValue: 'iMD App PK',
        }),
        tagline: fields.text({
          label: 'Tagline',
          defaultValue: 'Medical Resources',
        }),
        whatsappNumber: fields.text({
          label: 'WhatsApp Number (digits only, e.g. 923329722201)',
          defaultValue: '923329722201',
        }),
        telegramHandle: fields.text({
          label: 'Telegram Username (without @)',
          defaultValue: 'imd_app_pk',
        }),
        supportEmail: fields.text({
          label: 'Support Email',
          defaultValue: 'support@imdresources.com',
        }),
        youtubeUrl: fields.url({
          label: 'YouTube URL',
          defaultValue: 'https://youtube.com/@imdapppk',
        }),
        telegramChannelUrl: fields.url({
          label: 'Telegram Channel URL',
          defaultValue: 'https://t.me/imd_app_pk',
        }),
        instagramUrl: fields.url({
          label: 'Instagram URL',
          defaultValue: 'https://www.instagram.com/imd_app_pk',
        }),
        facebookUrl: fields.url({
          label: 'Facebook URL',
          defaultValue: 'https://www.facebook.com/iMDAppPak',
        }),
      },
    }),
  },
  collections: {
    plans: collection({
      label: 'Subscription Plans',
      slugField: 'name',
      path: 'content/plans/*',
      schema: {
        name: fields.slug({ name: { label: 'Plan Name' } }),
        price: fields.text({ label: 'Price (e.g. $50)' }),
        days: fields.text({ label: 'Duration (e.g. 180 Days)' }),
        isPopular: fields.checkbox({
          label: 'Mark as Most Popular?',
          defaultValue: false,
        }),
        features: fields.array(
          fields.text({ label: 'Feature item' }),
          {
            label: 'Feature List',
            itemLabel: (props) => props.value,
          },
        ),
        subscribeWhatsappText: fields.text({
          label: 'Subscribe WhatsApp pre-filled text',
          multiline: true,
          defaultValue:
            "Hi! I'm interested in the iMD App subscription. Could you please share the details?",
        }),
        extendWhatsappText: fields.text({
          label: 'Extend WhatsApp pre-filled text',
          multiline: true,
          defaultValue:
            'Hi! I already have an iMD App subscription and would like to extend my subscription. Could you please guide me through the renewal process?',
        }),
      },
    }),
    faqs: collection({
      label: 'FAQs',
      slugField: 'question',
      path: 'content/faqs/*',
      schema: {
        question: fields.slug({ name: { label: 'Question' } }),
        answer: fields.text({ label: 'Answer', multiline: true }),
        category: fields.select({
          label: 'Category',
          options: [
            { label: 'Subscription & Payment', value: 'subscription' },
            { label: 'The App', value: 'app' },
          ],
          defaultValue: 'subscription',
        }),
        order: fields.number({ label: 'Sort Order', defaultValue: 1 }),
      },
    }),
  },
})
