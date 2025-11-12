export const metadata = {
  title: "Artilcles Section",
};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
