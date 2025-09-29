class User {
  constructor(
    fullName,
    userName,
    userType,
    dob,
    email,
    profilePhoto,
    userId
  ) {
    this.fullName = fullName; // Frontend field
    this.userName = userName;
    this.userType = userType;
    this.dob = dob;
    this.email = email;
    this.profilePhoto = profilePhoto;
    this.userId = userId;
  }

  static fromJSON(json) {
    return new User(
      json.name, // Map API field `name` to frontend field `fullName`
      json.userName,
      json.userType,
      json.dob,
      json.email,
      json.profilePhoto,
      json.userId
    );
  }

  toJSON() {
    return {
      name: this.fullName, // Map frontend field `fullName` to API field `name`
      userName: this.userName,
      userType: this.userType,
      dob: new Date(this.dob)
        .toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
        .replace(/\//g, ""), // Format to MMDDYYYY
      email: this.email,
      profilePhoto: this.profilePhoto,
      userId: this.userId,
    };
  }
}

export default User;