const Title = ({ label }: { label: string }) => {
  return (
    <>
      <h3 className="text-2xl font-bold">{label}</h3>
      <div className="my-2 w-[100px] h-[3px] rounded-full bg-greenFav" />
    </>
  );
};

export default Title;
