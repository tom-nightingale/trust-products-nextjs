export default function Container({ children, classes }) {
  return(
    <div className={`w-full px-6 mx-auto max-w-screen-3xl md:px-8`}>
      {children}
    </div>
  )
}