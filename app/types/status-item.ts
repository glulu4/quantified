export type StatusItem<T> = {value: T; status: 'new' | 'old' | "updated"};

/**
 * Filters a status map for items marked as "new", returning the raw items of type T.
 */
export function getNewItems<T>(itemMap: Map<string, StatusItem<T>>): T[] {
    return Array.from(itemMap.values())
        .filter(({status}) => status === 'new')
        .map(({value}) => value);
}

export function getOldItems<T>(itemMap: Map<string, StatusItem<T>>): T[] {
    return Array.from(itemMap.values())
        .filter(({status}) => status === "old")
        .map(({value}) => value);
}

export function getAllItems<T>(itemMap: Map<string, StatusItem<T>>): T[] {
    return Array.from(itemMap.values()).map(({value}) => value);
}

export function getUpdatedItems<T>(itemMap: Map<string, StatusItem<T>>): T[] {
    return Array.from(itemMap.values())
        .filter(({status}) => status === "updated")
        .map(({value}) => value);
}