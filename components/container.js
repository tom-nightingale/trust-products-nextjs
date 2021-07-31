export default function Container({ children }) {
  return(
    <div className="w-full px-6 mx-auto max-w-screen-2xl md:px-8">
      {children}
    </div>
  )
}