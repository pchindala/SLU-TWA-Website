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

  toJSON() {
    return {
      resumeId: this.id,
      name: this.name,
      video: this.video,
      description: this.description,
      skills: this.skills,
      category: this.category,
      transport: this.transport,
      location: this.location,
      industry: this.industry,
      isFavorite: this.isFavorite,
    };
  }

  static fromJSON(json) {
    console.log(`fromJSON input: ${json}`);
    return new Resume(
      json.resumeId,
      json.name,
      json.videoURL,
      json.description,
      json.skills,
      json.category,
      json.transport,
      json.location || 'remote',
      json.industry || 'other',
      json.isFavorite
    );
  }
}

module.exports = Resume;
