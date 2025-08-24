export default {
  translation: {
    errors: {
      userExists: 'This user already exists',
      channelExists: 'Channel name already exists',
      addChannelFailed: 'The channel was not added, please try again later',
      messageSendFailed: 'The message was not sent, please try again later',
      invalidCredentials: 'Incorrect username or password',
      required: 'Required field',
      usernameLength: 'From 3 to 20 characters',
      minimumLength: 'Minimum 3 characters',
      maximumLength: 'Maximum 20 characters',
      passwordMin: 'At least 6 characters',
      passwordMismatch: 'Passwords must match',
      channelCreateError: 'Error creating the channel',
      networkError: 'Connection error',
    },

    buttons: {
      send: 'Send',
      remove: 'Remove',
      cancel: 'Cancel',
      rename: 'Rename',
      logout: 'Logout',
      login: 'Login',
      register: 'Register',
      channelControl: 'Channel management',
      changeLanguage: 'Switch to Russian'
    },

    navigation: {
      notFound: 'Page not found',
      redirect: 'But you can go',
      mainPage: 'to the main page',
    },

    register: {
      username: 'Username',
      password: 'Password',
      confirmPassword: 'Confirm password',
    },

    auth: {
      username: 'Your username',
      password: 'Password',
      confirmPassword: 'Confirm password',
    },

    modals: {
      addChannel: 'Add channel',
      enterChannelName: 'Channel name',
      sampleChannelName: 'For example, my team',
      removeChannel: 'Remove channel',
      areYouSure: 'Are you sure?',
      renameChannel: 'Rename channel',
    },

    chat: {
      newMessage: 'New message',
      enterMessage: 'Enter a message',
    },

    ui: {
      channels: 'Channels',
      messages: 'messages',
      appName: 'Hexlet Chat',
      noAccount: 'No account?',
      uiRegister: 'Register',
      plus: '+',
    },

    notifications: {
      channelCreated: 'Channel created',
      channelRenamed: 'Channel renamed',
      channelRemoved: 'Channel removed',
    },
  },
}
