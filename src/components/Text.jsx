export default function Text({ children, addclass }) {
  return (
    <p className={`text-sm md:text-[1em] pt-3 pb-2 text-pretty text-left ${addclass}`}>
      {children}
    </p>
  );
}
