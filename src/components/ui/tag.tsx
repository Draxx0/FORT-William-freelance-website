export const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-full w-fit px-4 py-2 bg-[#dd3e3e]/10 text-primary text-sm font-medium">
      {children}
    </div>
  );
};
