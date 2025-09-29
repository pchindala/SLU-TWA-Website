import React, { useState } from 'react';
import axios from 'axios';
import { API_PATHS } from '../../api/paths';

const initialRegion = {
    city: '',
    state: '',
    image: null,
    contact: '',
};

const RegionDialog = ({ showModal, setShowModal, onSubmit }) => {
    const [region, setRegion] = useState(initialRegion);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setRegion((prev) => ({
            ...prev,
            [name]: name === 'image' ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state

        // Validate mandatory fields
        if (!region.city || !region.state || !region.image || !region.contact) {
            setError('All fields (City, State, Image, and Contact) are mandatory.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('city', region.city);
            formData.append('state', region.state);
            formData.append('image', region.image);
            formData.append('contact', region.contact);

            const response = await axios.post(API_PATHS.regions, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (onSubmit) {
                onSubmit(response.data);
            }
            setShowModal(false);
        } catch (error) {
            console.error('Error creating region:', error);
            setError(error.response?.data?.message || 'Failed to create region. Please try again.');
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
                <h2 className="text-xl font-bold mb-4">Create Region</h2>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">City:</label>
                        <input
                            type="text"
                            name="city"
                            value={region.city}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">State:</label>
                        <input
                            type="text"
                            name="state"
                            value={region.state}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Image File:</label>
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
                        <label className="block text-sm font-medium mb-2">Contact:</label>
                        <input
                            type="text"
                            name="contact"
                            value={region.contact}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
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
                            Create
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegionDialog;