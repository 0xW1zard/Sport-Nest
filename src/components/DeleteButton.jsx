'use client';
import React from 'react';
import { AlertDialog, Button } from "@heroui/react";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';

const DeleteButton = ({ name, id, url }) => {
    const router = useRouter();

    const handleDelete = async (id) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/${url}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json()

        console.log(res)
        if (res.deletedCount > 0) {
            url === "my-bookings" ? toast.success('booking deleted successfully') : toast.success('facility deleted successfully')
            router.refresh()
        } else {
            url === "my-bookings" ? toast.error('Failed to delete booking') : toast.error('Failed to delete facility')
        }


    }

    return (
        <div>
            <AlertDialog>
                <Button className="p-3 rounded-full bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
                    <Trash2 size={18} />
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete <strong>{name}</strong> and all of its
                                    data. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button slot="close" variant="danger" onClick={() => handleDelete(id)}>
                                    Delete Booking
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteButton;