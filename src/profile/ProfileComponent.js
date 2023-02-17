import React from "react";
import Button from "react-bootstrap/Button";
import profilePicture from "../image.png";
import PropTypes from "prop-types";

function ProfileComponent(props) {
  const handleName = () => {
    alert(`fullName: ${props.firstName} ${props.lastName}`);
  };

  return (
    /*The profile component gets data (fullName, bio, profession) as props & inline style etc...*/
    <div style={{ backgroundColor: "grey" }}>
      <img src={profilePicture} alt="Profile Picture" />
      <h1 style={{ textDecoration: "underline" }}>Prénom:</h1>
      <p>{props.firstName}</p>
      <h1 style={{ textDecoration: "underline" }}>Nom:</h1>
      <p>{props.lastName}</p>
      <h1 style={{ textDecoration: "underline" }}>Bio:</h1>
      <p>{props.bio}</p>
      <h1 style={{ textDecoration: "underline" }}>Profession:</h1>
      <p>{props.profession}</p>
      <Button type="button" onClick={handleName}>
        Valider
      </Button>
    </div>
  );
}

/*default props for Profile component*/
ProfileComponent.defaultProps = {
  firstName: "Carlos",
  lastName: "Elvira",
  bio: "No bio available",
  profession: "Unknown",
};

/*PropsType to check props*/
ProfileComponent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default ProfileComponent;
