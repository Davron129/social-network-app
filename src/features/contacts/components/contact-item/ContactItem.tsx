export const ContactItem = () => {
  return (
    <div className="h-[70px] w-full p-2.5 flex gap-x-2.5">
      <div className="w-[50px] h-[50px] rounded-full bg-secondary flex-2"></div>
      <div className="flex-1 overflow-hidden">
        <div>
          <p className="text-white text-sm font-medium truncate">Khaydarov Sherbek</p>
        </div>
        <div className="">
          <p className="text-muted text-sm truncate">sherbek.khaydarov99@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
