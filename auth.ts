import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const adminEmail = process.env.ADMIN_EMAIL
        const adminPassword = process.env.ADMIN_PASSWORD
        const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH

        if (!adminEmail || (!adminPassword && !adminPasswordHash)) {
          return null
        }

        const email = credentials?.email as string | undefined
        const password = credentials?.password as string | undefined

        if (!email || !password || email !== adminEmail) {
          return null
        }

        let valid = false
        if (adminPasswordHash) {
          valid = await bcrypt.compare(password, adminPasswordHash)
        } else if (adminPassword) {
          valid = password === adminPassword
        }

        if (!valid) {
          return null
        }

        return {
          id: 'admin',
          email: adminEmail,
          name: 'Admin',
        }
      },
    }),
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: 'jwt',
  },
  trustHost: true,
})
