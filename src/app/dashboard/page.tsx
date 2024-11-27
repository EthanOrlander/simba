import { auth } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";

export default async function Page() {
  const session = await auth();
  return (
    <HydrateClient>
      <div className="flex min-h-screen flex-col bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <main className="flex flex-col items-center justify-center text-white">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
              Simba
            </h1>
          </div>
        </main>
      </div>
    </HydrateClient>
  );
}
