export const FooterLinks = ({ links }) => (
    <div className="mb-4">
      {links.map((link) => (
        <p key={link.id} className="mb-4">
          <a href={link.url} className="text-neutral-600">
            {link.name}
          </a>
        </p>
      ))}
    </div>
  );