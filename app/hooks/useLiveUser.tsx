import { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { User } from '@/types/user';
import { handleError } from '@/utils/util';

export const useLiveUser = (uid: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!uid) {
      setLoading(false);
      setError(new Error('User ID is required'));
      return;
    }

    const unsubscribe = onSnapshot(
      doc(db, 'users', uid),
      (docSnap) => {
        if (docSnap.exists()) {
          setUser(docSnap.data() as User);
        }
        setLoading(false);
      },
      (err) => {
        handleError({
          error: err,
          fileName: 'useLiveUser',
          functionName: 'onSnapshot',
          msg: err.message,
        });
        setError(err);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [uid]);

  return { user, loading, error };
};
