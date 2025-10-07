import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { API_PATHS } from '../../api/paths';

const ResumeDialog = ({ showModal, setShowModal, onCreateResume, onEditResume, selectedResume, industries }) => {
    const initialResumeState = {
        id: '',
        name: '',
        video: null,
        description: '',
        skills: [],
        category: 'other',
        transport: 'public',
        industry: '',
        isFavorite: false,
    };

    const [resume, setResume] = useState(selectedResume || initialResumeState);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (selectedResume) {
            setResume({
                ...selectedResume,
                skills: Array.isArray(selectedResume.skills) ? selectedResume.skills : [],
            });
        }
    }, [selectedResume]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setResume((prev) => ({
            ...prev,
            [name]: name === 'video' ? files[0] : value,
        }));
    };

    const handleSkillsChange = (e) => {
        const { value } = e.target;
        setResume((prev) => ({
            ...prev,
            skills: value ? value.split(',').map((skill) => skill.trim()) : [],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!resume.name.trim() || (!resume.video && !selectedResume?.videoURL) || !resume.description.trim()) {
            setError('Name, Video, and Description are required.');
            return;
        }

        try {
            if (selectedResume) {
                const updatedResume = {
                    ...selectedResume,
                    name: resume.name?.trim() || selectedResume.name,
                    video: resume.video || selectedResume.videoURL,
                    description: resume.description?.trim() || selectedResume.description,
                    skills: resume.skills.length > 0 ? resume.skills.join(',') : selectedResume.skills,
                    category: resume.category?.trim() || selectedResume.category,
                    transport: resume.transport?.trim() || selectedResume.transport,
                    industry: resume.industry?.trim() || selectedResume.industry,
                    isFavorite: resume.isFavorite !== null ? resume.isFavorite : selectedResume.isFavorite,
                };
                await onEditResume(updatedResume);
            } else {
                const formData = new FormData();
                formData.append('name', resume.name);
                formData.append('video', resume.video);
                formData.append('description', resume.description);
                formData.append('skills', resume.skills.join(','));
                formData.append('category', resume.category);
                formData.append('transport', resume.transport);
                formData.append('industry', resume.industry);
                formData.append('isFavorite', resume.isFavorite);

                const token = localStorage.getItem('authToken');
                const response = await axios.post(API_PATHS.resumes, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`,
                    },
                });
                onCreateResume(response.data);
            }

            setResume(initialResumeState);
            setShowModal(false);
        } catch (error) {
            console.error('Error submitting resume:', error);
            setError(error.response?.data?.message || 'Failed to submit resume. Please try again.');
        }
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={() => setShowModal(false)}></div>
            <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg z-10">
                <h2 className="text-xl font-bold mb-4">{selectedResume ? 'Edit Resume' : 'Add Resume'}</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={resume.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Video:</label>
                        <input
                            type="file"
                            name="video"
                            accept="video/*"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Description:</label>
                        <textarea
                            name="description"
                            value={resume.description}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Skills (comma-separated):</label>
                        <input
                            type="text"
                            name="skills"
                            value={resume.skills.join(', ')}
                            onChange={handleSkillsChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Category:</label>
                        <select
                            name="category"
                            value={resume.category}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        >
                            <option value="None">None</option>
                            <option value="All crimes against a person">All crimes against a person</option>
                            <option value="Armed Criminal Action (crimes involving a gun)">Armed Criminal Action (crimes involving a gun)</option>
                            <option value="Case by case">Case by case</option>
                            <option value="Crimes within the last 7 years">Crimes within the last 7 years</option>
                            <option value="Crimes within the last 3 years">Crimes within the last 3 years</option>
                            <option value="Drug-related offenses">Drug-related offenses</option>
                            <option value="Embezzlement">Embezzlement</option>
                            <option value="Fraud">Fraud</option>
                            <option value="Murder (1st degree)">Murder (1st degree)</option>
                            <option value="Murder (1st and 2nd degree)">Murder (1st and 2nd degree, which involves loss of life but the)</option>
                            <option value="Offense involving children">Offense involving children</option>
                            <option value="Sexual offense (All)">Sexual offense (All)</option>
                            <option value="Sexual offense (involving children)">Sexual offense (involving children)</option>
                            <option value="Theft">Theft</option>
                            <option value="Violent crimes">Violent crimes</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Transport:</label>
                        <select
                            name="transport"
                            value={resume.transport}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        >
                            <option value="None">None</option>
                            <option value="Public">Public</option>
                            <option value="Private">Private</option>
                            
                        </select>
                    </div>
                    {console.log(`see dropdown industries: ${JSON.stringify(industries)}`)}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Industry:</label>
                        <select
                            name="industry"
                            value={resume.industry}
                            onChange={(e) => {
                                const selectedValue = e.target.value;
                                setResume((prev) => ({ ...prev, industry: selectedValue }));
                            }}
                            className="w-full border border-gray-300 rounded-lg p-2"
                        >
                            <option value="">Select Industry</option>
                            {industries.map((ind) => (
                                <option key={ind.industryId} value={ind.industryId}>
                                    {ind.industry}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">
                            Favorite:
                            <input
                                type="checkbox"
                                name="isFavorite"
                                checked={resume.isFavorite}
                                onChange={(e) =>
                                    setResume((prev) => ({ ...prev, isFavorite: e.target.checked }))
                                }
                                className="ml-2"
                            />
                        </label>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            {selectedResume ? 'Update Resume' : 'Add Resume'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

ResumeDialog.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    onCreateResume: PropTypes.func.isRequired,
    onEditResume: PropTypes.func.isRequired,
    selectedResume: PropTypes.object,
    industries: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default ResumeDialog;