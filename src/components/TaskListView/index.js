// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { SectionList, TouchableOpacity } from 'react-native';

import {
  HeaderContainer,
  HeaderTagContainer,
  HeaderTagText,
  HeaderText,
  ItemContainer,
  ItemTitle,
} from './styles';

const TaskListView = ({ tasks, navigation }) => {
  const _renderSectionHeader = sectionData => (
    <HeaderContainer>
      <HeaderTagContainer>
        <HeaderTagText>{sectionData.section.title.substr(0, 1)}</HeaderTagText>
      </HeaderTagContainer>
      <HeaderText>{sectionData.section.title}</HeaderText>
    </HeaderContainer>
  );

  const _renderItem = itemData => (
    <>
      <TouchableOpacity onPress={() => _onClickTask(itemData?.item)} >
        <ItemContainer >
          <ItemTitle>{itemData.item.title}</ItemTitle>
        </ItemContainer>
      </TouchableOpacity>
    </>
  );

  const _onClickTask = task => {
    navigation.navigate('Task', { task });
  };

  return (
    <SectionList
      renderSectionHeader={section => _renderSectionHeader(section)}
      sections={[
        {
          data: tasks.filter(data => data.priority),
          key: 'highPriority',
          title: 'High Priority',
        },
        {
          data: tasks.filter(data => !data.priority),
          key: 'lowPriority',
          title: 'Low Priority',
        },
      ]}
      renderItem={data => _renderItem(data)}
    />
  );
};

export default TaskListView;
