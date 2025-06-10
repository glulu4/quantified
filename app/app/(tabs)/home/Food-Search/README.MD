this is just a context file.


### Logic

the user can select api foods. api foods are managed seperately and have their own hook. in syncWithState, the api foods are converted to food items and added to state

users queried foods are rendered in the mixed food list and are managed by the foodManager ( see hook )

all items are managed by a local state then synced into the Zustand store on entry and exit
