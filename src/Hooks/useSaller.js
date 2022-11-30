import { useEffect, useState } from 'react';

const useSaller = email => {
    const [isSaller, setIsSaller] = useState(false);
    const [isSallerLoading, setIsSallerLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://chaffer-resale-server.vercel.app/users/saller/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSaller(data.isSaller)
                    setIsSallerLoading(false)
                });
        }
    }, [email])
    return [isSaller, isSallerLoading]
};

export default useSaller;