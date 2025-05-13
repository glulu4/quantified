import React from 'react';
import ContextMenu from 'react-native-context-menu-view';

interface ContextMenuSelectorProps {
    options: string[];
    value: string;
    onChange: (selected: string) => void;
    dropdownMenuMode?: boolean;
    children: React.ReactNode;
}

export default function ContextMenuSelector({
    options,
    value,
    onChange,
    dropdownMenuMode = true,
    children,
}: ContextMenuSelectorProps) {
    const actions = options.map(option => ({
        title: option,
        identifier: option,
    }));

    return (
        <ContextMenu
            dropdownMenuMode={dropdownMenuMode}
            actions={actions}
            onPress={({nativeEvent}) => {
                if (nativeEvent.name) onChange(nativeEvent.name);
            }}
        >
            {children}
        </ContextMenu>
    );
}
