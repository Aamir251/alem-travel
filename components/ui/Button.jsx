export default function Button({ variant, children, className }) {

  const styles = {
    primary : "btn-primary",
    outline : "text-white px-5 lg:px-8 py-2 border border-white font-medium",
  }
  return (
    <button className={`${styles[variant]} ${className}`}>
      {children}
    </button>
  )
}