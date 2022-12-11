import Link from "next/link";
import classes from "./button.module.css";

interface ButtonProps {
  link?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
function Button(props: ButtonProps) {
  const { link, children, onClick } = props;
  if (link)
    return (
      <Link legacyBehavior href={link}>
        <a className={classes.btn}>{children}</a>
      </Link>
    );
  return (
    <button onClick={onClick} className={classes.btn}>
      {children}
    </button>
  );
}

export default Button;
