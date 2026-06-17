import bcrypt from 'bcryptjs'

const password = process.argv[2]

if (!password) {
  console.error('Usage: node scripts/generate-admin-hash.mjs <password>')
  process.exit(1)
}

const hash = bcrypt.hashSync(password, 10)
console.log('\nAdd to your .env.local or Vercel environment:\n')
console.log(`ADMIN_PASSWORD_HASH=${hash}`)
console.log('\nRemove ADMIN_PASSWORD when using the hash.\n')
