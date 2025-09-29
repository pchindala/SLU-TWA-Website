class Profile {
  constructor(fullName, dob, email, userType, username) {
    this.fullName = fullName;
    this.dob = dob;
    this.email = email;
    this.userType = userType;
    this.username = username;
  }

  static fromJSON(json) {
    return new Profile(
      json.fullName,
      json.dob,
      json.email,
      json.userType,
      json.username
    );
  }

  toJSON() {
    return {
      fullName: this.fullName,
      dob: this.dob,
      email: this.email,
      userType: this.userType,
      username: this.username,
    };
  }
}

export default Profile;
