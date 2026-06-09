'use client';
import React from 'react';
import { AlertDialog, Button } from "@heroui/react";
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const DeleteButton = ({ name, id }) => {
    const router = useRouter();

    const handleDelete = async (id) => {
        console.log(id)
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const res = await response.json()

        console.log(res)
        if (res.deletedCount > 0) {
            toast.success('Booking Deleted')
            router.refresh()
        } else {
            toast.error('booking not deleted')
        }


    }

    return (
        <div>
            <AlertDialog>
                <Button variant="danger">Delete</Button>
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