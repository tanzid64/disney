const HeaderItem = ({ title, Icon }) => {
  return (
    <div className="flex items-center gap-3 text-[18] font-semibold cursor-pointer hover:underline underline-offset-8">
      <Icon />
      <h2 className="">{title}</h2>
    </div>
  );
};

export default HeaderItem;
