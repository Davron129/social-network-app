export const ContactViewPage = () => {
  return (
    <div className="h-full flex flex-col bg-dark">
      <header className="h-12 bg-primary border-b border-secondary"></header>

      <main className="p-5">
        <div className="max-w-[600px] mx-auto">
          <div className="mb-5 h-[120px] w-[120px] rounded-full bg-secondary mx-auto"></div>

          <p className="text-center text-md text-white mb-5">Sherbek Khaydarov</p>

          <div className="p-4 bg-primary rounded-lg divide-y divide-secondary">
            <div>
              <span className="text-xs text-blue-secondary">bio</span>
              <p className="text-sm text-white mb-2">Professional mistake maker!</p>
            </div>
            <div>
              <span className="text-xs text-blue-secondary">email</span>
              <p className="text-sm text-white mb-2">sherbek.khaydarov99@gmail.com</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
