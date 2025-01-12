interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  const filteredClassName = className ?? "";
  return (
    <div
      className={`${filteredClassName} bg-zinc-300 dark:bg-zinc-800 rounded-lg shadow-lg text-black dark:text-white`}
    >
      {children}
    </div>
  );
};

export default Container;
