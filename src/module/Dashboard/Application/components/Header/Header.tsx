import { useNavigate } from "react-router-dom";
import { ArrowBackIcon } from "shared";

interface IProps {
  title: string;
  description: string;
  isBackIcon?: boolean;
}
export default function Header(props: IProps) {
  const { title, description, isBackIcon } = props;
  const navigate = useNavigate();

  return (
    <header className="sidebar-header">
      <div className="flex ai-center">
        {isBackIcon && (
          <div onClick={() => navigate(-1)} className="icon-container">
            <ArrowBackIcon />
          </div>
        )}
        <h2>{title}</h2>
      </div>
      <div className="line"></div>
      <p>{description}</p>
    </header>
  );
}
