"use client";

import Button from "@/components/Button";

export default function BackButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <Button
      text={text}
      onClick={() => window.history.back()}
      className={className}
    />
  );
}
