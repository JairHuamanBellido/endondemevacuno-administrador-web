interface IProps {
  isEnable: boolean;
}
export default function TagAccountStatus(props: IProps) {
  const { isEnable } = props;
  return (
    <div className="tag-account-status flex f-row ai-center">
      <div className={`circle ${isEnable ? "active" : "inactive"}`} />
      <p>{isEnable ? "Activo" : "Desactivado"}</p>
    </div>
  );
}
