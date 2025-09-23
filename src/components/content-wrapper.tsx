import { cn } from "@/lib/utils";

interface ContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentWrapper({
  children,
  className,
}: ContentWrapperProps) {
  return <div className={cn("p-8", className)}>{children}</div>;
}
