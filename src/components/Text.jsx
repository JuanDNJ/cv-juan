export default function Text({ children, addclass }) {
  return (
    <p className={`body-copy text-sm md:text-[1em] text-pretty text-left ${addclass}`}>
      {children}
    </p>
  );
}
