import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { API_PATHS } from '../../api/paths';

const IndustryDialog = ({ showModal, setShowModal, onCreateIndustry, locations }) => {
    const [industry, setIndustry] = useState({
        id: '',
        name: '',
        image: null,
        location: '',
    });
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setIndustry((prev) => ({
            ...prev,
            [name]: name === 'image' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        // Validate mandatory fields
        if (!industry.name.trim() || !industry.image || !industry.location.trim()) {
            setError('All fields except ID are required.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('name', industry.name);
            formData.append('image', industry.image);
            formData.append('location', industry.location);

            const response = await axios.post(API_PATHS.industries, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (onCreateIndustry) {
                onCreateIndustry(response.data);
            }
            setShowModal(false);
        } catch (error) {
            console.error('Error creating industry:', error);
            setError(error.response?.data?.message || 'Failed to create industry. Please try again.');
        }
    };

    const handleClose = () => {
        setShowModal(false);
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={handleClose}></div>
            <div className="relative bg-white rounded-lg p-6 w-full max-w-md shadow-lg z-10">
                <h2 className="text-xl font-bold mb-4">Add Industry</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Industry Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={industry.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Image:</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Location:</label>
                        <select
                            name="location"
                            value={industry.location}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        >
                            <option value="">Select Location</option>
                            {locations.map((loc) => (
                                <option key={loc.cityId} value={loc.cityId}>
                                    {loc.city}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex justify-end gap-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                        >
                            Add Industry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

IndustryDialog.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired,
    onCreateIndustry: PropTypes.func.isRequired,
    locations: PropTypes.arrayOf(PropTypes.string).isRequired,
};

IndustryDialog.defaultProps = {
    locations: [],
};

export default IndustryDialog;