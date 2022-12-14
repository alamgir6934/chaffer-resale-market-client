import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSelar = () => {
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://chaffer-resale-server.vercel.app/users');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <h2>all sellar</h2>
        </div>
    );
};

export default AllSelar;