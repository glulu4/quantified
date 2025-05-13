// import React from 'react';
// import {render, fireEvent} from '@testing-library/react-native';
// import HomeScreen from './HomeScreen';
// import {useAuth, useAuthenticatedUser} from '@/app/context/AuthContext';
// import {useUserFormDefs} from '@/hooks/useUserFormDefs';
// import {useHomeScreenLogic} from './useHomeScreenLogic';


// // Mock dependencies
// jest.mock('@sentry/react-native');
// jest.mock('@/app/context/AuthContext', () => ({
//     useAuth: jest.fn(),
//     useAuthenticatedUser: jest.fn(),
// }));
// jest.mock('@/hooks/useUserFormDefs', () => ({
//     useUserFormDefs: jest.fn(),
// }));
// jest.mock('./useHomeScreenLogic', () => ({
//     useHomeScreenLogic: jest.fn(),
// }));
// jest.mock('@/hooks/useThemeColor', () => ({
//     useThemeColor: jest.fn(() => 'blue'),
// }));
// jest.mock('react-native-sfsymbols', () => ({
//     SFSymbol: () => null,
// }));

// describe('HomeScreen', () => {
//     beforeEach(() => {
//         jest.clearAllMocks();
//     });

//     it('renders HomeScreen correctly', () => {
//         // Mock user authentication
//         (useAuth as jest.Mock).mockReturnValue({logout: jest.fn()});
//         (useAuthenticatedUser as jest.Mock).mockReturnValue({uid: 'user123'});

//         // Mock user forms data
//         (useUserFormDefs as jest.Mock).mockReturnValue({
//             formDefinitions: [],
//             topFormDefinitions: [],
//             loading: false,
//             error: null,
//         });

//         // Mock navigation logic
//         const mockGoToAddForm = jest.fn();
//         const mockGoToFormSubmission = jest.fn();
//         (useHomeScreenLogic as jest.Mock).mockReturnValue({
//             goToAddForm: mockGoToAddForm,
//             goToFormSubmission: mockGoToFormSubmission,
//             deleteForm: jest.fn(),
//             viewAllForms: jest.fn(),
//         });

//         // Render the HomeScreen component
//         const {getByText, getByTestId} = render(<HomeScreen />);

//         // Check if Recents and Favorites sections are present
//         expect(getByText('Recents')).toBeTruthy();
//         expect(getByText('Favorites')).toBeTruthy();

//         // Check if View All button is present
//         expect(getByText('View All')).toBeTruthy();

//         // Check if Plus Icon button is clickable
//         const plusButton = getByTestId('plus-icon-button');
//         fireEvent.press(plusButton);
//         expect(mockGoToAddForm).toHaveBeenCalled();
//     });

//     it('calls logout when UserHeader logout button is pressed', () => {
//         const mockLogout = jest.fn();
//         (useAuth as jest.Mock).mockReturnValue({logout: mockLogout});
//         (useAuthenticatedUser as jest.Mock).mockReturnValue({uid: 'user123'});

//         (useUserFormDefs as jest.Mock).mockReturnValue({
//             formDefinitions: [],
//             topFormDefinitions: [],
//             loading: false,
//             error: null,
//         });

//         const {getByTestId} = render(<HomeScreen />);

//         // Simulate logout button press
//         fireEvent.press(getByTestId('user-header-logout'));
//         expect(mockLogout).toHaveBeenCalled();
//     });
// });
