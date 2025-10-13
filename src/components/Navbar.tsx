export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50 p-4 flex justify-between items-center">
      <div className="font-bold text-xl">MyPortfolio</div>
      <div className="space-x-4">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
