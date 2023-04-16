import { SignIn } from "@clerk/nextjs/app-beta";

export default function Page() {
  return (
    <div className="h-full flex justify-center items-center">
      <SignIn />
    </div>
  );
}
