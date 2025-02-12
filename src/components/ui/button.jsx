export function Button({ children, className, ...props }) {
    return (
      <button
        className={`px-4 py-2 border rounded-md transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  