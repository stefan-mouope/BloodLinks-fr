import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button, Input, Card, RoleSelector, BloodTypeSelector, BankSelector } from '../components/ui';
import { theme } from '../constants/theme';
import { SignUpFormData } from '../types';
import { responsiveSize, responsiveFontSize } from '../utils/responsive';

/**
 * Exemple d'utilisation du nouveau système de formulaire adapté aux modèles Django
 */
const DjangoFormExample: React.FC = () => {
  const handleFormSubmit = (data: SignUpFormData) => {
    console.log('Données du formulaire:', data);
    
    // Exemple de structure de données pour l'API Django
    const apiData = {
      // Données communes
      email: data.email,
      password: data.password,
      user_type: data.user_type,
      
      // Données spécifiques selon le type d'utilisateur
      ...(data.user_type === 'docteur' && {
        nom: data.nom,
        prenom: data.prenom,
        code_inscription: data.code_inscription,
        banque_de_sang_id: data.banque_de_sang_id,
      }),
      
      ...(data.user_type === 'banque' && {
        nom: data.nom_banque,
        localisation: data.localisation,
        code_inscription: data.code_inscription_banque,
      }),
      
      ...(data.user_type === 'donneur' && {
        nom: data.nom_donneur,
        prenom: data.prenom_donneur,
        groupe_sanguin: data.groupe_sanguin,
      }),
    };
    
    Alert.alert(
      'Données du formulaire',
      JSON.stringify(apiData, null, 2),
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exemple Formulaire Django</Text>
      
      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Structure des données</Text>
        
        <Text style={styles.description}>
          Le formulaire génère maintenant des données qui correspondent exactement 
          aux modèles Django :
        </Text>
        
        <View style={styles.codeBlock}>
          <Text style={styles.codeText}>
            {`// Pour un docteur:
{
  email: "docteur@example.com",
  password: "password123",
  user_type: "docteur",
  nom: "Dr. Smith",
  prenom: "John",
  code_inscription: "DOC123DOC",
  banque_de_sang_id: 1
}

// Pour une banque:
{
  email: "banque@example.com", 
  password: "password123",
  user_type: "banque",
  nom: "Banque Centrale",
  localisation: "Casablanca",
  code_inscription: "BANC456BANC"
}

// Pour un donneur:
{
  email: "donneur@example.com",
  password: "password123", 
  user_type: "donneur",
  nom: "Dupont",
  prenom: "Marie",
  groupe_sanguin: "A+"
}`}
          </Text>
        </View>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Validation</Text>
        
        <Text style={styles.description}>
          Le formulaire inclut une validation complète :
        </Text>
        
        <View style={styles.validationList}>
          <Text style={styles.validationItem}>• Codes d'inscription doivent finir par "DOC" ou "BANC"</Text>
          <Text style={styles.validationItem}>• Sélection obligatoire de la banque pour les docteurs</Text>
          <Text style={styles.validationItem}>• Sélection obligatoire du groupe sanguin pour les donneurs</Text>
          <Text style={styles.validationItem}>• Validation email et mot de passe</Text>
        </View>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Composants disponibles</Text>
        
        <View style={styles.componentList}>
          <Text style={styles.componentItem}>• RoleSelector - Sélection du rôle</Text>
          <Text style={styles.componentItem}>• BloodTypeSelector - Sélection groupe sanguin</Text>
          <Text style={styles.componentItem}>• BankSelector - Sélection banque de sang</Text>
          <Text style={styles.componentItem}>• Input - Champs de saisie avec validation</Text>
          <Text style={styles.componentItem}>• Button - Boutons avec états de chargement</Text>
        </View>
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
  description: {
    fontSize: responsiveFontSize(theme.typography.fontSize.base),
    color: theme.colors.textSecondary,
    marginBottom: responsiveSize(theme.spacing.md),
    lineHeight: responsiveSize(theme.typography.lineHeight.base),
  },
  codeBlock: {
    backgroundColor: theme.colors.gray100,
    padding: responsiveSize(theme.spacing.md),
    borderRadius: theme.borderRadius.md,
    marginBottom: responsiveSize(theme.spacing.md),
  },
  codeText: {
    fontSize: responsiveFontSize(theme.typography.fontSize.sm),
    fontFamily: 'monospace',
    color: theme.colors.textPrimary,
    lineHeight: responsiveSize(theme.typography.lineHeight.sm),
  },
  validationList: {
    marginLeft: responsiveSize(theme.spacing.md),
  },
  validationItem: {
    fontSize: responsiveFontSize(theme.typography.fontSize.base),
    color: theme.colors.textSecondary,
    marginBottom: responsiveSize(theme.spacing.xs),
    lineHeight: responsiveSize(theme.typography.lineHeight.base),
  },
  componentList: {
    marginLeft: responsiveSize(theme.spacing.md),
  },
  componentItem: {
    fontSize: responsiveFontSize(theme.typography.fontSize.base),
    color: theme.colors.textSecondary,
    marginBottom: responsiveSize(theme.spacing.xs),
    lineHeight: responsiveSize(theme.typography.lineHeight.base),
  },
});

export default DjangoFormExample;
