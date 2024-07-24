import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="my-12 md:my-0">
      <SignIn />
    </div>
  );
}
