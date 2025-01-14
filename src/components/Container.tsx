interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: ContainerProps) => {
  const filteredClassName = className ?? "";
  return (
    <div
      className={`${filteredClassName} bg-zinc-200 dark:bg-zinc-800 rounded-lg shadow-xl text-black dark:text-white`}
    >
      {children}
    </div>
  );
};

export default Container;
