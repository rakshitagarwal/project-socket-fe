import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      authorize(credentials, req) {
        //db call
        return credentials;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
};
