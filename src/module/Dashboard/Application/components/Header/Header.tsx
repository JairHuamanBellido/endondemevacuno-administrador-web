interface IProps {
  title: string;
  description: string;
}
export default function Header(props: IProps) {
  const { title, description } = props;
  return (
    <header className="sidebar-header">
      <h2>{title}</h2>
      <div className="line"></div>
      <p>{description}</p>
    </header>
  );
}
