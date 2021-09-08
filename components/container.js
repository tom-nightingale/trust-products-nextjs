export default function Container({ children, classes }) {
  return(
    <div className={`w-full mx-auto max-w-screen-2xl px-10`}>
      {children}
    </div>
  )
}