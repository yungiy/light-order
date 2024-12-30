import { twMerge } from 'tailwind-merge';

type Props = React.ComponentPropsWithoutRef<'button'>;

export default function Button(props: Props) {
  const { className, children, ...rest } = props;
  return (
    <button
      className={twMerge(
        'h-14 w-full rounded-sm bg-white border border-black text-black disabled:bg-light-gray',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}