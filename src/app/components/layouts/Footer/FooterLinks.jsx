export const FooterLinks = ({ links }) => (
    <div className="mb-4 ">
      {links.map((link) => (
        <p key={link.id} className="mb-4 font-medium">
          <a href={link.url} className="text-white text-lg">
            {link.name}
          </a>
        </p>
      ))}
    </div>
  );