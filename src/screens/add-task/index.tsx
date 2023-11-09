import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import strings from '../../constants/strings';
import moment from 'moment';
import BottomSheet, {
  BottomSheetScrollView,
  useBottomSheetSpringConfigs,
} from '@gorhom/bottom-sheet';
import colors from '../../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from '../../constants/Layout';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useAddTask} from './hooks';

const validationSchema = yup.object().shape({
  taskName: yup.string().required(strings.TASK_NAME_REQUIRED),
  description: yup.string().required(strings.DESCRIPTION_REQUIRED).min(10),
  taskHeading: yup.string().required(strings.TASK_HEADING_REQUIRED).max(20),
  category: yup.string().required(strings.CATEGORY_REQUIRED),
});

interface IValues {
  taskName: string;
  description: string;
  taskHeading: string;
  category: string;
}

const AddTask = () => {
  const insets = useSafeAreaInsets();

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
    duration: 500,
  });

  const initialValue = {
    taskName: '',
    description: '',
    taskHeading: '',
    category: '',
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isStartTimePickerVisible, setStartTimePickerVisibility] =
    useState(false);
  const [isEndTimePickerVisible, setEndTimePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [endTime, setEndTime] = useState(new Date().getTime());

  const formattedDate = moment(selectedDate).format('MMM DD, YYYY');
  const sendedDate = moment(selectedDate).format('DD MMM YYYY');

  const {mutateAsync, isLoading, error, isError} = useAddTask();

  const onCancel = () => {
    setDatePickerVisibility(false);
  };

  const onConfirm = date => {
    setSelectedDate(date);
    setDatePickerVisibility(false);
  };

  const onCancelStartTime = () => {
    setStartTimePickerVisibility(false);
  };

  const onConfirmStartTime = date => {
    setStartTime(date);
    setStartTimePickerVisibility(false);
  };

  const onCancelEndTime = () => {
    setEndTimePickerVisibility(false);
  };

  const onConfirmEndTime = date => {
    setEndTime(date);
    setEndTimePickerVisibility(false);
  };

  const handleDateSelect = () => {
    setDatePickerVisibility(true);
  };

  const handleCreateTask = (values: IValues) => {
    mutateAsync({
      category: values.category,
      description: values.description,
      shortDescription: values.taskHeading,
      title: values.taskName,
      date: sendedDate,
      startTime: String(startTime),
      endTime: String(endTime),
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}
      style={{flex: 1}}>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleCreateTask}>
        {({errors, values, handleChange, handleSubmit}) => (
          <>
            <LinearGradient
              colors={[
                colors.brandPrimary,
                colors.blue.light,
                colors.blue.light1,
              ]}
              style={[styles.container, {paddingTop: insets.top}]}>
              <Text style={styles.createText}>Create Task</Text>

              <Text style={styles.taskName}>Name</Text>
              <TextInput
                placeholder={strings.TASK_NAME}
                style={styles.inputContainer}
                onChangeText={handleChange('taskName')}
                value={values.taskName}
              />
              {errors.taskName && (
                <Text style={styles.errors}>{errors.taskName}</Text>
              )}

              <Text style={styles.taskName}>Date</Text>
              <TouchableOpacity onPress={handleDateSelect} activeOpacity={0.9}>
                <TextInput
                  placeholder={strings.TASK_NAME}
                  style={styles.inputContainer}
                  editable={false}
                  pointerEvents="none"
                  value={formattedDate}
                />
              </TouchableOpacity>
            </LinearGradient>
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              onCancel={onCancel}
              onConfirm={onConfirm}
              isDarkModeEnabled={false}
              mode="date"
              date={selectedDate}
              textColor={colors.brandPrimary}
              minimumDate={new Date()}
            />

            <BottomSheet
              animationConfigs={animationConfigs}
              index={0}
              handleIndicatorStyle={{display: 'none'}}
              snapPoints={['62%']}>
              <BottomSheetScrollView
                style={styles.bottomSheetContainer}
                contentContainerStyle={{paddingBottom: scale(30)}}
                showsVerticalScrollIndicator={false}>
                <View style={styles.startEndTimeContainer}>
                  <View style={styles.startTimeContainer}>
                    <Text style={styles.startEndTimeText}>Start Time</Text>
                    <TouchableOpacity
                      onPress={() => setStartTimePickerVisibility(true)}
                      activeOpacity={0.9}>
                      <Text style={styles.startEndTime}>
                        {moment(startTime).format('hh:mm A')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View>
                    <Text style={styles.startEndTimeText}>End Time</Text>
                    <TouchableOpacity
                      onPress={() => setEndTimePickerVisibility(true)}
                      activeOpacity={0.9}>
                      <Text style={styles.startEndTime}>
                        {moment(endTime).format('hh:mm A')}
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.lineBreaker} />

                {isError && <Text style={styles.errors}>{error}</Text>}

                <Text style={styles.descriptionText}>Description</Text>
                <TextInput
                  placeholder={strings.ENTER_TASK_DESCRIPTION}
                  style={styles.descritionInput}
                  onChangeText={handleChange('description')}
                  value={values.description}
                  placeholderTextColor={colors.gray.light}
                  multiline
                />
                {errors.description && (
                  <Text style={styles.errors}>{errors.description}</Text>
                )}

                <Text
                  style={[styles.descriptionText, {marginBottom: scale(15)}]}>
                  Task Heading
                </Text>
                <TextInput
                  placeholder={strings.ENTER_TASK_HEADING}
                  style={styles.descritionInput}
                  onChangeText={handleChange('taskHeading')}
                  value={values.taskHeading}
                  placeholderTextColor={colors.gray.light}
                />
                {errors.taskHeading && (
                  <Text style={styles.errors}>{errors.taskHeading}</Text>
                )}

                <Text
                  style={[styles.descriptionText, {marginBottom: scale(15)}]}>
                  Category
                </Text>
                <TextInput
                  placeholder={strings.ENTER_CATEGORY_NAME}
                  style={styles.descritionInput}
                  onChangeText={handleChange('category')}
                  value={values.category}
                  placeholderTextColor={colors.gray.light}
                />
                {errors.category && (
                  <Text style={styles.errors}>{errors.category}</Text>
                )}

                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() => handleSubmit()}
                  disabled={isLoading}
                  style={styles.buttonContainer}>
                  {isLoading ? (
                    <ActivityIndicator size={18} color={colors.white.default} />
                  ) : (
                    <Text style={styles.buttonText}>Create Task</Text>
                  )}
                </TouchableOpacity>
              </BottomSheetScrollView>
            </BottomSheet>

            <DateTimePickerModal
              isVisible={isStartTimePickerVisible}
              onCancel={onCancelStartTime}
              onConfirm={onConfirmStartTime}
              isDarkModeEnabled={false}
              textColor={colors.brandPrimary}
              mode="time"
            />
            <DateTimePickerModal
              isVisible={isEndTimePickerVisible}
              onCancel={onCancelEndTime}
              onConfirm={onConfirmEndTime}
              isDarkModeEnabled={false}
              textColor={colors.brandPrimary}
              mode="time"
            />
          </>
        )}
      </Formik>
    </TouchableOpacity>
  );
};

export default AddTask;
