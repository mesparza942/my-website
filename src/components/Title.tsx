const Title = ({ label }: { label: string }) => {
  return (
    <div>
      <h3 className="text-xl md:text-2xl font-bold">{label}</h3>
      <div className="my-2 w-[100px] h-[3px] rounded-full bg-greenFav" />
    </div>
  );
};

export default Title;
