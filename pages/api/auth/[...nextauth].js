import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const isCorrectCredentials = (credentials) =>
    credentials.username === process.env.NEXTAUTH_USERNAME &&
    credentials.password === process.env.NEXTAUTH_PASSWORD;

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "Admin" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials, req) {
                if (isCorrectCredentials(credentials)) {
                    const user = { id: 1, name: "SG" };
                    return user
                }
                return null
            }
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 2 // 1 day
    },
    secret: process.env.JWT_SECRET,
});

