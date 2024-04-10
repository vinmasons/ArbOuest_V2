export function PictoReactivite({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 203 209"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M126 109.5c22.091 0 40-17.909 40-40s-17.909-40-40-40-40 17.909-40 40 17.909 40 40 40z"
      ></path>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M73 208.5h130c-7-44-28-79-55-91-21 13-42 2-61-13-39-28-27-14-57-94-8-19-36-8-29 11 5 13 21 67 37 86 51 40 45 32 35 101z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
