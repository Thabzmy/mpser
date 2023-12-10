import { useState, useEffect } from 'react';

export default function ManagingHooks(){
    const [ids, setIds] = useState<string[]>([]);

    useEffect(() => {
        const res = localStorage.getItem('ids');
        const ids : any = (res == null) ? [] : res;
        setIds(ids);
      }, []);

    return ids;
}