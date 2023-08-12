import Image from "next/image";

type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function Card({ user, pagetype }: Props) {
  console.log(user);

  const greeting = user?.name ? (
    <div className="flex flex-col text-xl text-black">
      {user?.name}!
    </div>
  ) : null;

  const emailDisplay = user?.email ? (
    <div className="flex flex-col items-center text-sm text-black">
      {user?.email}
    </div>
  ) : null;

  const userImage = user?.image ? (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto"
      src={user?.image}
      width={80}
      height={80}
      alt={user?.name ?? "Profile Pic"}
      priority={true}
    />
  ) : null;

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div>{userImage}</div>
        <div className="flex flex-col space-y-4">
          <p>{greeting}</p>
          <p>{emailDisplay}</p>
        </div>
      </div>
      {/* <p className="text-2xl text-center">{pagetype} Page!</p> */}
    </section>
  );
}
