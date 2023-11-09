import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../../constants/colors';

interface ICustomInput {
  value: string;
  onChange?: (text: string) => void;
  placeholder: string;
  textInputName?: string;
  iconName: string;
  isPassword?: boolean;
  errors?: string;
  isEditable?: boolean;
}

const CustomInput = ({
  value,
  placeholder,
  textInputName,
  iconName,
  isPassword,
  errors,
  isEditable = true,
  onChange,
}: ICustomInput) => {
  const borderColor = errors ? colors.red.dark : colors.brandPrimary;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEyePress = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <>
      <View style={styles.inputContainer}>
        <Text style={styles.headingName}>{textInputName}</Text>
        <View style={styles.innerTextInputContainer}>
          <MaterialCommunityIcons
            name={iconName}
            size={26}
            style={styles.icon}
            color={colors.brandPrimary}
          />
          <TextInput
            placeholder={placeholder}
            style={[styles.textInput, {borderColor}]}
            value={value}
            onChangeText={onChange}
            secureTextEntry={isPasswordVisible}
            editable={isEditable}
            pointerEvents={isEditable ? 'auto' : 'none'}
            placeholderTextColor={colors.gray.default}
          />
          {isPassword && (
            <TouchableOpacity
              style={styles.passEyeContainer}
              activeOpacity={0.9}
              onPress={handleEyePress}>
              <Ionicons
                name={isPasswordVisible ? 'eye-off' : 'eye'}
                size={24}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {errors && <Text style={styles.errorText}>{errors}</Text>}
    </>
  );
};

export default CustomInput;
