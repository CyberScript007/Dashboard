function ProfilePicture() {
  return (
    <li className="relative z-10 w-10 cursor-pointer">
      <img
        src="/img/profile-picture.png"
        alt="profile picture"
        className="h-10 w-10 rounded-full object-cover"
      />
      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-red-400">
        &nbsp;
      </span>
    </li>
  );
}

export default ProfilePicture;
