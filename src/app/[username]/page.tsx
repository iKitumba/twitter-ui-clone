import React from "react";

type ProfilePageProps = {
  params: {
    username: string;
  };
};

const ProfilePage = (props: ProfilePageProps) => {
  return <div>{props.params.username}</div>;
};

export default ProfilePage;
