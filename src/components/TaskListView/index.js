import React from 'react';
import {
  TouchableOpacity,
  SectionList
} from 'react-native';

import {
  Container,
  HeaderTagText,
  HeaderText,
  HeaderContainer,
  ItemContainer,
  HeaderTagContainer,
  ItemTitle
} from './styles';

const TaskListView = ({tasks}) => {
  const _renderSectionHeader = (sectionData) => (
    <HeaderContainer>
      <HeaderTagContainer>
        <HeaderTagText>
          {
            sectionData.section.title.substr(0, 1)
          }
        </HeaderTagText>
      </HeaderTagContainer>
      <HeaderText>
        {
          sectionData.section.title
        }
      </HeaderText>
    </HeaderContainer>
  )

  const _renderItem = (itemData) => (
    <TouchableOpacity>
      <ItemContainer>
        <ItemTitle>
          {itemData.item.title}
        </ItemTitle>
      </ItemContainer>
    </TouchableOpacity>
  )

  return (
    <SectionList
      renderSectionHeader={(section) => _renderSectionHeader(section)}
      sections={[
        {
          data: tasks.filter(data => {
            return data.priority
          }),
          key: "highPriority",
          title: 'High Priority'
        },
        {
          data: tasks.filter(data => {
            return !data.priority
          }),
          key: 'lowPriority',
          title: 'Low Priority'
        }
      ]}
      renderItem={(data) => _renderItem(data)} />
  );
}

export default TaskListView;
