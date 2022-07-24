const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <main className="flex flex-col min-h-screen flex-auto w-full text-highContrast">{children}</main>
}

export default Page
