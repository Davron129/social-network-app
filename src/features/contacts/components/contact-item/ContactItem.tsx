export const ContactItem = () => {
  return (
    <div className="h-[70px] w-full p-2.5 flex gap-x-2.5 hover:bg-active group">
      <div className="w-[50px] h-[50px] rounded-full bg-secondary flex-2 overflow-hidden aspect-square">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQHRCVlEMl7eqg/profile-displayphoto-shrink_400_400/0/1708437149639?e=1714003200&v=beta&t=dm2Jo52jRDfBh8PltUljmNinStwAT81sWPQ1rV6-tRo"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex-1 overflow-hidden">
        <div>
          <p className="text-white text-sm font-medium truncate">Khaydarov Sherbek</p>
        </div>
        <div className="">
          <p className="text-muted group-hover:text-white text-sm truncate">
            sherbek.khaydarov99@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};
