import profilePhotoPlaceholder from "../../assets/profile_image_placeholder.png";
class User {
  constructor(
    fullName,
    userName,
    userType,
    email,
    profilePhoto,
    userId,
    _id // Added _id as a parameter
  ) {
    this.fullName = fullName; // Frontend field
    this.userName = userName;
    this.userType = userType;
    this.email = email;
    this.profilePhoto = profilePhoto;
    this.userId = userId;
    this._id = _id; // Initialize _id
  }

  static fromJSON(json) {
    console.log("User JSON from API:", json);
    return new User(
      json.name, // Map API field `name` to frontend field `fullName`
      json.userName,
      json.userType,
      // json.dob,
      json.email,
      json.profilePhoto || profilePhotoPlaceholder,
      json.userId,
      json._id // Include _id in fromJSON mapping
    );
  }

  toJSON() {
    return {
      name: this.fullName, // Map frontend field `fullName` to API field `name`
      userName: this.userName,
      userType: this.userType,
      // dob: new Date(this.dob).toLocaleDateString("en-US", {
      //   month: "2-digit",
      //   day: "2-digit",
      //   year: "numeric",
      // }), // Format to MM/DD/YYYY
      email: this.email,
      profilePhoto: this.profilePhoto , // Use placeholder if profilePhoto is missing
      userId: this.userId,
      _id: this._id, // Include _id in toJSON output
    };
  }
}

export default User;