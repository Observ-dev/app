import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Index() {
  const supabase = createServerComponentClient({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="w-full flex flex-col items-center">
      <div className="animate-in flex flex-col gap-14 opacity-0 max-w-4xl px-3 py-16 lg:py-24 text-foreground">
        <div className="flex flex-col items-center mb-4 lg:mb-12">
          <h1 className="sr-only">Supabase and Next.js Starter Template</h1>
          <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
            The fastest way to start loggging with <strong>Observ.dev</strong>
          </p>
          {user ? (
            <h1>Signed In</h1>
          ) : (
            <form
              className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
              action="/auth/sign-in"
              method="post"
            >
              <label className="text-md" htmlFor="email">
                Email
              </label>
              <input
                className="rounded-md px-4 py-2 bg-inherit border mb-6"
                name="email"
                placeholder="you@example.com"
                required
              />
              <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
                Log In
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
