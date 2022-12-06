import Link from "next/link";
import classes from "./button.module.css";

interface ButtonProps {
  link: string;
  children: React.ReactNode;
}
function Button(props: ButtonProps) {
  const { link, children } = props;
  return (
    <Link legacyBehavior href={link}>
      <a className={classes.btn}>{children}</a>
    </Link>
  );
}

export default Button;
