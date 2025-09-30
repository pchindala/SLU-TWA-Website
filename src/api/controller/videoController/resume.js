import { API_PATHS } from "../../paths";
import axios from "axios";
import Resume, { ResumeModel } from "../../Model/ResumeModel";

export async function ResumeCardData() {
//   try {
    const response = await axios.get(
      API_PATHS.resumes,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(`response data: ${JSON.stringify(response.data)}`);
    // Format the data using the Resume model
    const formattedData = response.data.resumes.map(resume => new Resume(
      resume.resumeId,
      resume.name,
      resume.videoURL,
      resume.description,
      resume.skills,
      resume.category,
      resume.transport,
      resume.location,
      resume.industry,
      resume.isFavorite
    ));

    console.log(`formattedData: ${JSON.stringify(formattedData)}`);
    return formattedData;
//   } catch (error) {
//     throw error;
//   }
}

export async function deleteResume(id) {
  try {
    const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
    await axios.delete(`${API_PATHS.resumes}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Add the Authorization header
      },
    });
    console.log(`Resume with id ${id} deleted successfully.`);
  } catch (error) {
    console.error(`Error deleting resume with id ${id}:`, error);
    throw error;
  }
}

export async function updateResumeAPI(updatedResume) {
  try {
    const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
    const response = await axios.put(
      `${API_PATHS.resumes}/${updatedResume.id}`,
      updatedResume,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Authorization header
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(`Resume with id ${updatedResume.id} updated successfully.`);
    return response.data;
  } catch (error) {
    console.error(`Error updating resume with id ${updatedResume.id}:`, error);
    throw error;
  }
}

export const createResumeAPI = async (resume) => {
  const formData = new FormData();
  const resumeData = resume;

  formData.append("name", resumeData.name);
  formData.append("video", resumeData.video);
  formData.append("description", resumeData.description);
  formData.append("skills", resumeData.skills.join(","));
  formData.append("category", resumeData.category);
  formData.append("transport", resumeData.transport);
  formData.append("industry", resumeData.industry);
  formData.append("isFavorite", resumeData.isFavorite);

  const token = localStorage.getItem("authToken");

  try {
    const response = await axios.post(API_PATHS.resumes, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(`Resume created successfully: ${JSON.stringify(response.data)}`);
    return Resume.fromJSON(response.data);
  } catch (error) {
    console.error("Error creating resume:", error);
    throw error;
  }
};