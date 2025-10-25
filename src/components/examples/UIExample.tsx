import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input, Card, RoleSelector } from '../components/ui';
import { theme } from '../constants/theme';
import { responsiveSize, responsiveFontSize } from '../utils/responsive';

/**
 * Example component demonstrating the UI system usage
 * This shows how to compose the reusable components
 */
const UIExample: React.FC = () => {
  const handleButtonPress = () => {
    console.log('Button pressed!');
  };

  const handleInputChange = (text: string) => {
    console.log('Input changed:', text);
  };

  const handleRoleSelect = (role: 'doctor' | 'bloodBank' | 'donor') => {
    console.log('Role selected:', role);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UI Components Example</Text>
      
      {/* Button Examples */}
      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Buttons</Text>
        
        <Button
          title="Primary Button"
          onPress={handleButtonPress}
          variant="primary"
          size="md"
          style={styles.button}
        />
        
        <Button
          title="Secondary Button"
          onPress={handleButtonPress}
          variant="secondary"
          size="md"
          style={styles.button}
        />
        
        <Button
          title="Outline Button"
          onPress={handleButtonPress}
          variant="outline"
          size="md"
          style={styles.button}
        />
        
        <Button
          title="Full Width Button"
          onPress={handleButtonPress}
          variant="primary"
          size="lg"
          fullWidth
        />
      </Card>

      {/* Input Examples */}
      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Inputs</Text>
        
        <Input
          label="Email"
          placeholder="Enter your email"
          onChangeText={handleInputChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Input
          label="Password"
          placeholder="Enter your password"
          onChangeText={handleInputChange}
          secureTextEntry
        />
        
        <Input
          label="Large Input"
          placeholder="Large size input"
          onChangeText={handleInputChange}
          size="lg"
        />
      </Card>

      {/* Role Selector Example */}
      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Role Selector</Text>
        <RoleSelector
          selectedRole="bloodBank"
          onRoleSelect={handleRoleSelect}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: responsiveSize(theme.spacing.lg),
  },
  title: {
    fontSize: responsiveFontSize(theme.typography.fontSize['2xl']),
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textPrimary,
    textAlign: 'center',
    marginBottom: responsiveSize(theme.spacing.xl),
  },
  section: {
    marginBottom: responsiveSize(theme.spacing.lg),
  },
  sectionTitle: {
    fontSize: responsiveFontSize(theme.typography.fontSize.lg),
    fontWeight: theme.typography.fontWeight.semiBold,
    color: theme.colors.textPrimary,
    marginBottom: responsiveSize(theme.spacing.md),
  },
  button: {
    marginBottom: responsiveSize(theme.spacing.sm),
  },
});

export default UIExample;
