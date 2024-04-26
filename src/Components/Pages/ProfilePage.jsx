import React, { useState, useEffect } from "react";
import "./profilePageStyles.css";
import axios from "axios";

const ProfilePage = ({ backToShop, user, setUser, userId }) => {
  const [isEditDisabled, setIsEditDisabled] = useState(true);
  const fetchUserEndpoint = `http://localhost:4000/get-user/${userId}`;
  const editUserEndpoint = `http://localhost:4000/edit-profile-info/${userId}`;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(fetchUserEndpoint, { userId });
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  const [editUserObject, setEditUserObject] = useState({
    userId: userId,
    userName: user.userName,
    password: user.password,
    profession: user.profession,
    favoriteAnimal: user.favoriteAnimal,
  });

  const toggleEdit = () => {
    setIsEditDisabled(!isEditDisabled);
  };

  const editUser = async () => {
    try {
      const response = await axios.put(editUserEndpoint, {
        userId: userId,
        userName: editUserObject.userName,
        password: editUserObject.password,
        profession: editUserObject.profession,
        favoriteAnimal: editUserObject.favoriteAnimal,
      });
      console.log("User edited:", response.data);
      setUser(response.data);
      setIsEditDisabled(true);
    } catch (error) {
      console.error("Error editing user:", error.message);
    }
  };

  return (
    <>
      <div>
        <button onClick={backToShop}>Back</button>
      </div>
      <div class="profile-card">
        <div class="avatar">
          <img
            src="https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="profile-img"
          />
        </div>
        <div class="salutation">
          <div class="name">
            <input
              className={
                isEditDisabled ? "profile_input_disabled" : "profile_input"
              }
              defaultValue={user?.userName}
              disabled={isEditDisabled}
            />
          </div>
          <div class="designation">
            {" "}
            <input
              className={
                isEditDisabled ? "profile_input_disabled" : "profile_input"
              }
              defaultValue={user?.profession}
              disabled={isEditDisabled}
            />
          </div>
          <div class="designation">
            {" "}
            <input
              className={
                isEditDisabled ? "profile_input_disabled" : "profile_input"
              }
              defaultValue={user?.favoriteAnimal}
              disabled={isEditDisabled}
            />{" "}
          </div>
          {!isEditDisabled && (
            <button style={{ height: "1.8em" }} onClick={editUser}>
              Save
            </button>
          )}
        </div>
        <div class="options">
          <button class="status">
            <img
              src="https://pics.freeicons.io/uploads/icons/png/5384369221607053936-64.png"
              alt=""
              class="btn-img"
            />
            <span>Set a Status</span>
          </button>
          <button class="edit-profile" onClick={toggleEdit}>
            <img
              src="https://pics.freeicons.io/uploads/icons/png/5157340221529652583-64.png"
              alt=""
              class="btn-img"
            />
            <span>Edit Profile</span>
          </button>
          <button class="more" id="more-btn">
            <img
              src="https://pics.freeicons.io/uploads/icons/png/3214319516276482563764-64.png"
              alt=""
              class="btn-img"
            />
            <span>More</span>
          </button>
        </div>
        <div class="more-options notVisible" id="more-options">
          <div class="option">Login</div>
          <div class="option">Join</div>
          <div class="option">Change Language</div>
          <div class="option">Image & Video API</div>
          <div class="option">Apps & Plugins</div>
          <div class="option">FAQ</div>
          <div class="option">Partnerships</div>
          <div class="option">Inprint & Terms</div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
