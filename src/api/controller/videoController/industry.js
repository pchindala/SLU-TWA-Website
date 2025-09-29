import { API_PATHS } from "../../paths";
import axios from "axios";
import Industry from "../../Model/IndustryModel";

export async function IndustryCardData() {
  try {
    const response = await axios.get(
      API_PATHS.industries,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    // Format the data using the Industry model
    const formattedData = response.data.industries.map(industry => new Industry(
      industry.industryId,
      industry.name,
      industry.imageURL,
      industry.individuals,
      industry.location
    ));

    // console.log(formattedData);
    return formattedData;
  } catch (error) {
    throw error;
  }
}