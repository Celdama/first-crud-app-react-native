import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import IndexScreen from './src/screens/indexScreen';

const navigator = createSwitchNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);

export default createAppContainer(navigator);
