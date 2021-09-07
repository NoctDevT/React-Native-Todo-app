import React, { useState, useContext } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { ThemeContext } from "./themeContext";

export default function ToggleButton() {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        if (darkMode)
            theme.dispatch({ type: "LIGHTMODE" });
        else
            theme.dispatch({ type: "DARKMODE" });
    };


    const [isEnabled, setIsEnabled] = useState(false);
    // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <View>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}
