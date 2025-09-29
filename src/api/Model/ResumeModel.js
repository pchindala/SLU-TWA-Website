class Resume {
  constructor(id, name, videoURL, description, skills, category, transport, location, industry, isFavorite) {
    this.id = id;
    this.name = name;
    this.videoURL = videoURL;
    this.description = description;
    this.skills = skills;
    this.category = category;
    this.transport = transport;
    this.location = location;
    this.industry = industry;
    this.isFavorite = isFavorite;
  }
}

module.exports = Resume;
