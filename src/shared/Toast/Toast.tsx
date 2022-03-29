import "./index.scss";
interface Props {
  description: string;
}
export default function Toast({ description }: Props) {
  return (
    <div className="toast-container">
      <p>{description}</p>
    </div>
  );
}
