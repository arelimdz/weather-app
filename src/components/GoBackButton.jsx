import { useNavigate } from "react-router-dom";

const GoBack = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate(-1);
  
    return (
      <button type="button" onClick={handleClick}>
        Go Back ⏪
      </button>
    );
};

export default GoBack