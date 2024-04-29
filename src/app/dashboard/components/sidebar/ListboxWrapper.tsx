export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div
    className="flex h-full flex-col p-3 
              shadow-xl dark:shadow-zinc-800 hover:shadow-2xl 
              outline outline-1 outline-slate-300 dark:outline-zinc-800"
  >
    {children}
  </div>
);
