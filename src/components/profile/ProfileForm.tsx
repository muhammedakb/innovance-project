import React from "react";

interface Props {}

const ProfileForm = (props: Props) => {
  return (
    <div className="profile-form">
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="date" />
        <input type="email" />
        <select name="" id="">
          <option value="">Şehir seçiniz</option>
        </select>
        <button type="submit">Kaydet</button>
      </form>
    </div>
  );
};

export default ProfileForm;
