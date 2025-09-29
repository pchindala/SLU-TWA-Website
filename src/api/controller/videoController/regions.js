import { API_PATHS } from "../../paths";
import axios from "axios";
import Regions from "../../Model/RegionsModel";

export async function RegionsCardData() {
  try {
    const response = await axios.get(
      API_PATHS.regions,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Format the data using the Regions model
    const formattedData = response.data.regions.map(region => new Regions(
      region.cityId,
      region.city,
      region.state,
      region.imageURL,
      region.industries,
      region.individuals,
      region.contact
    ));

    // console.log(formattedData);
    return formattedData;
  } catch (error) {
    throw error;
  }
}