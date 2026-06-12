"use client";

import React, { useState } from 'react';
import { Modal, Button } from "@heroui/react";
import { Pencil } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function EditFacilityModal({ facility }) {
    const router = useRouter();
    const sportOptions = [
        'All', 'Basketball Court', 'Football Field', 'Tennis Court',
        'Swimming Pool', 'Gymnasium', 'Dance Studio', 'Climbing Wall'
    ];
    const timeSlotOptions = [
        '06:00 (6:00 AM)', '07:00 (7:00 AM)', '08:00 (8:00 AM)', '09:00 (9:00 AM)', '10:00 (10:00 AM)',
        '11:00 (11:00 AM)', '12:00 (12:00 PM)', '13:00 (1:00 PM)', '14:00 (2:00 PM)', '15:00 (3:00 PM)',
        '16:00 (4:00 PM)', '17:00 (5:00 PM)', '18:00 (6:00 PM)', '19:00 (7:00 PM)', '20:00 (8:00 PM)',
        '21:00 (9:00 PM)', '22:00 (10:00 PM)', '23:00 (11:00 PM)'
    ];

    const [selectedSlots, setSelectedSlots] = useState(facility?.available_slots || []);

    const toggleSlot = (slot) => {
        if (selectedSlots.includes(slot)) {
            setSelectedSlots(selectedSlots.filter((s) => s !== slot));
        } else {
            setSelectedSlots([...selectedSlots, slot]);
        }
    };

    const handleEditSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.available_slots = selectedSlots;
        console.log("Updating facility:", data);

        const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/manage-facilities/${facility._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const res = await result.json();
        console.log("Update response:", res);
        if (res.modifiedCount > 0) {
            toast.success('Facility updated successfully!');
            router.refresh();
        } else {
            toast.error('Failed to update facility. Please try again.');
            router.refresh();
        }
    };

    return (
        <Modal>
            <Button className="p-3 rounded-full border border-gray-200 text-green-700 bg-white hover:bg-gray-100 transition-colors">
                <Pencil />
            </Button>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-3xl w-full">
                        <Modal.CloseTrigger className='z-10 p-4 rounded-full' />

                        <Modal.Header className="relative overflow-hidden pt-6 px-6">
                            <Modal.Heading className="text-2xl font-extrabold text-gray-900 tracking-tight">
                                Edit Facility
                            </Modal.Heading>
                            <p className="mt-1.5 text-sm text-gray-500">
                                Update the details, pricing, or availability of {facility?.name}.
                            </p>
                        </Modal.Header>

                        <Modal.Body className="p-6 max-h-[70vh] overflow-y-auto">
                            <form id="edit-facility-form" onSubmit={handleEditSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="name">Facility Name</label>
                                    <input
                                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm"
                                        name="name" required
                                        defaultValue={facility?.name}
                                        placeholder="e.g. Downtown Elite Tennis Courts"
                                        type="text"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="facility_type">Sport Type</label>
                                    <select
                                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 appearance-none focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm cursor-pointer"
                                        name="facility_type" required
                                        defaultValue={facility?.facility_type || ""}
                                    >
                                        <option disabled value="">Select a sport...</option>
                                        {sportOptions.map((sport, index) => (
                                            <option key={index} value={sport}>{sport}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="location">Location</label>
                                    <input
                                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm"
                                        name="location" required
                                        defaultValue={facility?.location}
                                        placeholder="Address or Area"
                                        type="text"
                                    />
                                </div>

                                <div className="col-span-1 md:col-span-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="image">Facility Image URL</label>
                                    <input
                                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm"
                                        name="image" required
                                        defaultValue={facility?.image}
                                        placeholder="https://example.com/your-image.jpg"
                                        type="url"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 col-span-1 md:col-span-2 bg-gray-50 p-6 rounded-xl border border-gray-100 mt-2">
                                    <div className="col-span-1 md:col-span-2 w-full flex flex-col md:flex-row gap-6">
                                        <div className='w-full'>
                                            <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="price_per_hour">Price per Hour ($)</label>
                                            <input
                                                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm"
                                                name="price_per_hour" required
                                                defaultValue={facility?.price_per_hour}
                                                placeholder="0.00"
                                                type="number"
                                                step="0.01"
                                            />
                                        </div>

                                        <div className='w-full'>
                                            <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="capacity">Max Capacity (People)</label>
                                            <input
                                                className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-[#00652c] focus:ring-1 focus:ring-[#00652c] transition-all shadow-sm"
                                                name="capacity" required
                                                defaultValue={facility?.capacity}
                                                placeholder="e.g. 22"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                    <div className='col-span-2'>
                                        <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="available_slots">Available Time Slots</label>
                                        <div className="flex flex-wrap gap-2">
                                            {timeSlotOptions.map((slot, index) => {
                                                const isSelected = selectedSlots.includes(slot);
                                                return (
                                                    <button
                                                        key={index}
                                                        type="button"
                                                        onClick={() => toggleSlot(slot)}
                                                        className={`px-4 py-2 rounded-xl border text-sm font-medium transition-all duration-200 ${isSelected
                                                            ? 'bg-green-800 text-white border-green-500 shadow-sm scale-105'
                                                            : 'bg-white text-gray-700 border-gray-300 hover:border-green-800 hover:text-green-800'
                                                            }`}
                                                    >
                                                        {slot}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>

                                <div className="col-span-1 md:col-span-2 mt-2">
                                    <label className="block text-sm font-bold text-gray-700 mb-1" htmlFor="description">Description</label>
                                    <textarea
                                        className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all shadow-sm resize-y"
                                        name="description" required
                                        defaultValue={facility?.description}
                                        placeholder="Describe the amenities, rules, and unique features of this facility..."
                                        rows="4"
                                    ></textarea>
                                </div>
                            </form>
                        </Modal.Body>

                        <Modal.Footer className="bg-gray-50 border-t border-gray-100 px-6 py-4 rounded-b-2xl flex justify-end gap-3">
                            <Button
                                type="submit" slot="close"
                                form="edit-facility-form"
                                className="bg-green-700 text-white font-bold rounded-full px-8 py-3 hover:bg-green-800 hover:shadow-lg hover:scale-[1.02] transition-all duration-200"
                            >
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}