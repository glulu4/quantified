import { updateUser as updateUserCF, UserUpdate } from '@/cloudfunctions/updateFunctions';

export type { UserUpdate };

export const updateUser = async (update: UserUpdate): Promise<boolean> => {
  return updateUserCF(update);
};
