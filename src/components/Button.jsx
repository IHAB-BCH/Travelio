function Button({ content, href, className }) {
  return (
    <button
      className={`py-3 px-8 bg-majorelle-blue  rounded-full text-white ${className}`}
    >
      <a href={href}>{content}</a>
    </button>
  );
}

export default Button;
