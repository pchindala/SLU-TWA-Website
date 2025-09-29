class Regions {
  constructor(cityId, city, state, imageURL, industries, individuals, contact) {
    this.cityId = cityId;
    this.city = city;
    this.state = state;
    this.imageURL = imageURL;
    this.industries = industries;
    this.individuals = individuals;
    this.contact = contact;
  }
}

module.exports = Regions;