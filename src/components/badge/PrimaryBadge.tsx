import { Badge } from "../ui/badge"

export const PrimaryBadge = ({
  children,
  className,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Badge className={className} {...rest}>
      {children}
    </Badge>
  );
};
