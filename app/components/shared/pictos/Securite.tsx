export function PictoSecurite({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 208 259"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M104 15.972L34.667 55.426v5.007c0 76.751 31.46 102.996 65.433 119.917l3.9 1.986 3.9-1.986c33.973-17.266 65.433-43.166 65.433-119.917v-5.007L104 15.972zm-2.513 102.391a8.688 8.688 0 01-12.307 0l-17.333-17.267 12.306-12.259 11.18 11.223 28.514-28.49 12.306 12.26-34.666 34.533z"
      ></path>
    </svg>
  );
}
