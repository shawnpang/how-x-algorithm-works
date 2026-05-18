import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LLM as a religion — Shawn Pang",
  description:
    "Notes on treating large language models as a religion — the believers, the rites, the doctrine. A draft.",
};

export default function LlmAsAReligionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
