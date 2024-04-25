import React, { useState, useEffect } from "react";
import "./profilePageStyles.css";
import axios from "axios";

const ProfilePage = ({
  backToShop,
  userName,
  userId,
  profileInfo,
  setProfileInfo,
}) => {
  const [user, setUser] = useState({ userId: userId });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const endpoint = `http://localhost:4000/get-user/${userId}`;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post(endpoint, user);
        setUser(response.data);
        console.log(user);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <>
      <div>
        <button onClick={backToShop}>Back</button>ProfilePage
      </div>
      <div class="profile-card">
        <div class="avatar">
          <img
            src="https://images.pexels.com/photos/375880/pexels-photo-375880.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="profile-img"
          />
        </div>
        <div class="salutation">
          <div class="name">{user.userName}</div>
          <div class="designation">{user.profession}</div>
          <div class="designation">{user.favoriteAnimal}</div>
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
          <button class="edit-profile">
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
