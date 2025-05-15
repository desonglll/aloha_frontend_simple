import { useNavigate } from "react-router";

function BackButton() {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  return (
    <>
      <button className={"border mx-1 px-1 cursor-pointer"} onClick={back}>
        Back
      </button>
    </>
  );
}
export default BackButton;
